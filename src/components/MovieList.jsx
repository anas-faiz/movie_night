import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="text-white pl-8">
      <p className="text-3xl font-semibold mb-3">{title}</p>

      <div className="flex overflow-x-scroll scrollbar-hide gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
