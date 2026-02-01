import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)
  console.log("movies",nowPlayingMovies)
       
  return (
    <div className="bg-black">
      <MovieList title={"Now Playing"} posterPath={nowPlayingMovies[0].poster_path} />
    </div>
  )
}

export default SecondaryContainer