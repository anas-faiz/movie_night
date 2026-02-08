import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        TopRatedMovies: null,
        upcomingMovies: null,
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
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;