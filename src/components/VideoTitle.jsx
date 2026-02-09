import { useEffect, useState } from "react";

const VideoTitleSkeleton = () => {
  return (
    <div className="absolute pt-24 top-0 left-0 h-screen w-full bg-linear-to-r from-black via-black/70 to-transparent text-white">
      <div className="flex flex-col justify-center h-full px-6 md:px-16 max-w-2xl space-y-6 animate-pulse">
        
        {/* Title skeleton */}
        <div className="space-y-3">
          <div className="h-10 md:h-14 w-3/4 bg-gray-700 rounded"></div>
          <div className="h-10 md:h-14 w-1/2 bg-gray-700 rounded"></div>
        </div>

        {/* Overview skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-700 rounded"></div>
          <div className="h-4 w-10/12 bg-gray-700 rounded"></div>
          <div className="h-4 w-8/12 bg-gray-700 rounded"></div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex items-center gap-4 mt-4">
          <div className="h-10 w-28 bg-gray-700 rounded"></div>
          <div className="h-10 w-36 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const VideoTitle = ({ title, overview }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(true);
    }, 3500); // Netflix-ish delay

    return () => clearTimeout(timer);
  }, []);

  if (!title || !overview) {
    return <VideoTitleSkeleton />;
  }

  return (
    <div className="absolute pt-24 top-0 left-0 h-screen w-full bg-linear-to-r from-black via-black/70 to-transparent text-white">
      <div className="flex flex-col justify-center h-full px-6 md:px-16 max-w-2xl space-y-6">

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {title}
        </h1>

        {/* Overview */}
        <p
          className={`
            text-sm md:text-base text-gray-200
            transition-all duration-700 ease-in-out
            overflow-hidden
            ${collapsed ? "line-clamp-1 opacity-80" : "line-clamp-4 opacity-100"}
          `}
        >
          {overview}
        </p>

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
