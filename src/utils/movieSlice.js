import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        TopRatedMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailer : (state,action)=>{
            state.movieTrailer = action.payload
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload

        },
        addTopRatedMovies: (state,action)=>{
            state.TopRatedMovies = action.payload
        },
    }
})

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;