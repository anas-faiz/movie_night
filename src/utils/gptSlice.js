import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState: {
        isGptSearch:false
    },
    reducers:{
        isGptSearchActive: (state,action)=>{
            state.isGptSearch = !state.isGptSearch;
        }
    }
})

export const {isGptSearchActive} = gptSlice.actions

export default gptSlice.reducer