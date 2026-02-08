import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=2",
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
      }
      const json = await response.json();
      
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    getPopularMovies();
  }, [getPopularMovies]);
};

export default usePopularMovies;
