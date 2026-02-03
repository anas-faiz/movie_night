import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)
  console.log("movies",movies)
       
  return (
    <div className="bg-black w-screen">
      <div className="relative z-50 -mt-32">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
      </div>
    </div>
  )
}

export default SecondaryContainer