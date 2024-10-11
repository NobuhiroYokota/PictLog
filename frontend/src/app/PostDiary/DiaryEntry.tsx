// DiaryEntry.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import Return from "../components/Return";

const COLUMN_COUNT = 15; // 列数を15に固定
const COLUMN_WIDTH = 24; // 1列の幅をpixelで指定（例: 24px）
const TOTAL_WIDTH = COLUMN_COUNT * COLUMN_WIDTH; // 全体の幅

const DiaryEntry: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [chars, setChars] = useState<string[]>(Array(COLUMN_COUNT).fill(""));

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  useEffect(() => {
    const newChars = text.split("").slice(0, COLUMN_COUNT);
    setChars(newChars.concat(Array(COLUMN_COUNT - newChars.length).fill("")));
  }, [text]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    // Headerセクション
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-4">
        <Return toPage="/" />
        <button className="bg-blue-500 text-white py-1 px-4 rounded absolute top-0 right-0 m-4">送信＞</button>
      </div>

      {/* 内容セクション */}

      <div style={{ width: `${TOTAL_WIDTH}px` }} className="mx-auto mt-20">
        <div className="mb-4 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center" style={{ width: `${TOTAL_WIDTH}px`, height: `${TOTAL_WIDTH}px` }}>
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <Camera className="text-gray-400" size={48} />
              <p className="mt-2 text-sm text-gray-500">投稿すると絵が表示されます</p>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
              <label htmlFor="image-upload" className="inline-block mt-2 bg-gray-200 rounded-lg py-1 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-300">
                画像をアップロード
              </label>
            </div>
          )}
        </div>

        <div className="bg-amber-50 shadow-md border border-black rounded-md p-4 overflow-x-auto h-60 relative font-bold" style={{ width: `${TOTAL_WIDTH}px` }}>
          <div className="flex flex-row-reverse h-full">
            <div className="flex flex-col justify-start items-center mr-2 border-l border-black text-sm" style={{ width: `${COLUMN_WIDTH}px` }}>
              <span>{month}</span>
              <span>月</span>
              <span>{day}</span>
              <span>日</span>
            </div>
            {Array(COLUMN_COUNT)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="flex flex-col justify-start items-center border-l border-black" style={{ width: `${COLUMN_WIDTH}px` }}>
                  {chars[index].split("").map((char, charIndex) => (
                    <p
                      key={charIndex}
                      style={{
                        writingMode: "vertical-rl", // 縦書きを強制する
                        textOrientation: "upright", // 文字の向きを固定
                        textAlign: "center",
                        lineHeight: `${COLUMN_WIDTH}px`,
                        display: "block", // 確実に縦書きになるように
                      }}
                    >
                      {char}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        </div>

        <textarea
          className="w-full mt-4 p-2 border border-gray-300 rounded"
          rows={3}
          value={text}
          onChange={handleTextChange}
          placeholder="ここに日記を入力..."
          maxLength={COLUMN_COUNT}
          style={{ width: `${TOTAL_WIDTH}px` }}
        />
      </div>
    </div>
  );
};

export default DiaryEntry;
