import MovieCard from './MovieCard'

const MovieList = ({title,posterPath}) => {
    
  return (
    <div className='text-white pl-8'>
      {<p className='text-3xl'>{title}</p>}
      <div className='mt-3'>
        <MovieCard posterPath={posterPath}
        />
      </div>
    </div>
  )
}

export default MovieList