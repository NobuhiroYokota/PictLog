'use client';

import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/save-diary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputText }),
    });

    const data = await response.json();
    setImageUrl(data.createDiary.diaryUrl);  // 保存された画像URLを状態にセット
  };

  return (
    <div>
      <h1>クレヨン絵生成</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="文章を入力してください"
        />
        <button type="submit">画像生成</button>
      </form>

      {imageUrl && (
        <div>
          <h2>生成された画像</h2>
          <img src={imageUrl} alt="Generated Image" />
        </div>
      )}
    </div>
  );
}
