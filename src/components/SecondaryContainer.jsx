import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)
  console.log("movies",movies)
       
  return (
    <div className="bg-black">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
    </div>
  )
}

export default SecondaryContainer