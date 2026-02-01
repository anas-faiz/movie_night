import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  
  useTrailerVideo(id)

  return (
    <div className="w-screen aspect-video">
      {trailer && (
        <iframe
          className="w-screen h-screen"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
