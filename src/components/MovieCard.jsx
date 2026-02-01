import { img_cdn_uri } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <div>
            <img className="w-36" alt="movie_poster" src={img_cdn_uri + posterPath}/>
        </div>

    </div>
  )
}

export default MovieCard