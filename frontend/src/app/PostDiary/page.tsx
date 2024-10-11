import React from "react";

const PostDaily = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Main container */}
      <div className="w-[400px] bg-white shadow-md rounded-md p-4">
        {/* Top and text area */}
        <div className="relative flex flex-col justify-between items-center bg-gray-300 h-[200px] rounded-md">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 px-2 text-gray-600">{"<"}</button>
          <p className="text-center text-gray-700">投稿すると絵が表示されます</p>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 px-2 text-gray-600">{"送信>"}</button>
        </div>
        {/* Grid for the bottom section */}
        <div className="grid grid-cols-6 grid-rows-2 gap-1 mt-2">
          <div className="col-span-5 bg-gray-200 p-2 text-center">今日は</div>
          <div className="col-span-5 bg-gray-200 p-2 text-center">なんにも</div>
          <div className="col-span-5 bg-gray-200 p-2 text-center">すばらしい</div>
          <div className="col-span-5 bg-gray-200 p-2 text-center">一日だった</div>
          <div className="row-span-2 bg-gray-300 p-2 flex items-center justify-center text-center">8月32日</div>
        </div>
        {/* Input fields */}
        <div className="mt-4">
          <input type="text" placeholder="今日の出来事の内容を書いて..." className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
          <input type="text" placeholder="友達をタグ付け" className="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
          <input type="text" placeholder="場所を追加" className="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default PostDaily;
