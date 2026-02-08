import MovieCard from "./MovieCard";

const MovieCardSkeleton = () => {
  return (
    <div className="min-w-40 h-60 bg-gray-700 rounded-md animate-pulse"></div>
  );
};

const MovieListSkeleton = () => {
  return (
    <div className="pl-8">
      <div className="h-8 w-56 bg-gray-700 rounded mb-4 animate-pulse"></div>

      <div className="flex gap-4 overflow-hidden">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

const MovieList = ({ title, movies }) => {
  if (!movies) return <MovieListSkeleton />;

  if (movies.length === 0) return null;

  return (
    <div className="text-white pl-8">
      <p className="text-3xl font-semibold mb-3">{title}</p>

      <div className="flex overflow-x-scroll scrollbar-hide gap-4 pb-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
