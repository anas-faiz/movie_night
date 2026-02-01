import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (id)=>{

    const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const json = await data.json();

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filterData.length
        ? filterData[0]
        : json.results[0];

      dispatch(addTrailer(trailer));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, [id]);


}

export default useTrailerVideo