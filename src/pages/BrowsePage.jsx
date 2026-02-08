import Browse from "../components/Browse";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

function BrowsePage(){

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return(
        <div className="w-screen">
            <Header/>
            <Browse/>
        </div>
    )
}

export default BrowsePage;