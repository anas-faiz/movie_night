import { img_cdn_uri } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="relative min-w-40 cursor-pointer transition-transform duration-300 ease-out hover:scale-110">
      
      {/* Poster */}
      <img
        className="w-40 rounded-md object-cover"
        alt="movie_poster"
        src={img_cdn_uri + posterPath}
        loading="lazy"
      />

      {/* Gradient overlay (Netflix vibe) */}
      <div className="absolute inset-0 rounded-md bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default MovieCard;
