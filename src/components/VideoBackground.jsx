import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  
  useTrailerVideo(id)

  return (
    <div className="w-screen aspect-video">
      {trailer && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
