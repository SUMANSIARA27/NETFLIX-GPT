import { createSlice } from "@reduxjs/toolkit";

const moveSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        videoTailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addVideoTailer:(state,action)=>{
            state.videoTailer=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload;
        }
    }
});


export const {addNowPlayingMovies,addVideoTailer,addPopularMovies,addTopRatedMovies,addUpComingMovies} = moveSlice.actions;
export default moveSlice.reducer;