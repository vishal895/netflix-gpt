import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        nowPlayingMovie:null,
        nowPlayingTrailer:null
    },
    reducers: {
      addmovie:(state,action) => {
       state.nowPlayingMovie = action.payload
      },
      addMovieTrailer:(state,action) => {
        state.nowPlayingTrailer = action.payload
       },
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addmovie,addMovieTrailer } = movieSlice.actions
  
  export default movieSlice.reducer 
