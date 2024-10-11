import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { inputText } = await req.json();

  // DALL·E 2 APIで画像を生成
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,  // 環境変数にAPIキーを保存
    },
    body: JSON.stringify({
      model:"dall-e-3",
      prompt: `You are an excellent crayon artist in elementary school. Please output a crayon drawing based on the following input text."${inputText}"`,
      n: 1,
      size: '1024x1024',
    }),
  });

  const data = await response.json();
  const imageUrl = data.data[0].url;  // 生成された画像のURL

  // GraphQLを使ってバックエンドに画像URLを保存
  const graphqlResponse = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation CreateDiary($diaryUrl: String!) {
          createDiary(createDiaryInput: { diaryUrl: $diaryUrl }) {
            id
            diaryUrl
          }
        }
      `,
      variables: {
        diaryUrl: imageUrl,
      },
    }),
  });

  const result = await graphqlResponse.json();
  return NextResponse.json(result.data);
}
