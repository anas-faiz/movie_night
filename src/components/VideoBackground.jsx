import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackgroundSkeleton = () => {
  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      {/* shimmer overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse" />

      {/* fake controls area */}
      <div className="absolute bottom-20 left-10 space-y-4">
        <div className="h-8 w-72 bg-gray-700 rounded-md"></div>
        <div className="h-4 w-96 bg-gray-700 rounded-md"></div>

        <div className="flex gap-4 mt-6">
          <div className="h-10 w-32 bg-gray-700 rounded-md"></div>
          <div className="h-10 w-40 bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);

  useTrailerVideo(id);

  return (
    <div className="w-screen h-screen">
      {!trailer ? (
        <VideoBackgroundSkeleton />
      ) : (
        <iframe
          className="w-screen h-screen"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
