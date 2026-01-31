import Browse from "../components/Browse";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function BrowsePage(){

    useNowPlayingMovies();

    return(
        <div>
            <Header/>
            <Browse/>
        </div>
    )
}

export default BrowsePage;