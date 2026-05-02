import { createSlice } from "@reduxjs/toolkit";

const moveSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        videoTailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addVideoTailer:(state,action)=>{
            state.videoTailer=action.payload;
        }
    }
});


export const {addNowPlayingMovies,addVideoTailer} = moveSlice.actions;
export default moveSlice.reducer;