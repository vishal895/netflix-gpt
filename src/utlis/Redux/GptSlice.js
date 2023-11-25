import { createSlice } from '@reduxjs/toolkit'



 const GPTSlice = createSlice({
  name: 'GPT',
  initialState:{
    Showgpt:false,
    
    movieResults:null,
    movieName:null
    
  },
  reducers: {
    addGPT:(state)=>{
    state.Showgpt= !state.Showgpt
    },
    gptResultMovie:(state,action)=>{
      const {movieName,movieResults} = action.payload
      state.movieResults = movieResults
      state.movieName = movieName
    },
    

    
    
  },
  
})

// Action creators are generated for each case reducer function
export const { addGPT,gptResultMovie} = GPTSlice.actions

export default GPTSlice.reducer