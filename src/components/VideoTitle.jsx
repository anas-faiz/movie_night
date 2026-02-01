import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-24 top-0 left-0 h-screen w-full bg-linear-to-r from-black via-black/70 to-transparent text-white">
      <div className="flex flex-col justify-center h-full px-6 md:px-16 max-w-2xl space-y-6">
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h1>

        {/* Overview */}
        <p className="text-sm md:text-base text-gray-200 line-clamp-4">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 text-sm md:text-base font-semibold rounded hover:bg-gray-300 transition">
            ▶ Play
          </button>

          <button className="bg-gray-500/70 text-white px-6 py-2 text-sm md:text-base font-semibold rounded hover:bg-gray-500 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
