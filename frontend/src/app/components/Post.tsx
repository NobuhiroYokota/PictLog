import React from "react";

type PostProps = {
  username: string;
  timestamp: string;
  imageUrl: string;
  profilePicUrl: string;
};

const Post: React.FC<PostProps> = ({ username, timestamp, imageUrl, profilePicUrl }) => {
  return (
    <div className="w-auto h-auto mx-auto bg-white border border-gray-300 rounded-lg shadow-lg mb-6">
      {/* Header: Profile Picture and Username */}
      <div className="flex items-center p-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={profilePicUrl} />
          </div>
        </div>
        <div className="ml-4">
          <p className="font-bold text-gray-800">{username}</p>
          <p className="text-gray-500 text-sm">{timestamp}</p>
        </div>
        <div className="ml-auto">
          <button className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Image */}
      <div className="bg-gray-100">
        <img src={imageUrl} alt="Post" className="w-full object-cover" />
      </div>

      {/* Actions: Like, Comment, Share
      <div className="flex items-center justify-between p-4">
        <button className="flex items-center text-gray-700 hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
          Like
        </button>
        <button className="flex items-center text-gray-700 hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10m-4 4h4" />
          </svg>
          Comment
        </button>
        <button className="flex items-center text-gray-700 hover:text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l4 4m0 0l-4 4m4-4H8" />
          </svg>
          Share
        </button>
      </div> */}
    </div>
  );
};

export default Post;
