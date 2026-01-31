import { useEffect } from "react";
import Header from "../components/Header";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

function BrowsePage(){

    const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
        const json = await data.json();
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    return(
        <div className="w-full bg-amber-900">
            <Header/>
            Browse
        </div>
    )
}

export default BrowsePage;