import Browse from "../components/Browse";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function BrowsePage(){

    useNowPlayingMovies();

    return(
        <div className="w-full bg-amber-900">
            <Header/>
            <Browse/>
        </div>
    )
}

export default BrowsePage;