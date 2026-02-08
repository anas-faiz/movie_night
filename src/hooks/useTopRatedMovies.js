import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch top rated movies");
      }

      const json = await response.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);
};

export default useTopRatedMovies;
