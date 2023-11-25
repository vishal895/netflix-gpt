import { createSlice } from '@reduxjs/toolkit'



 const GPTSlice = createSlice({
  name: 'GPT',
  initialState:{
    Showgpt:false
  },
  reducers: {
    addGPT:(state)=>{
    state.Showgpt= !state.Showgpt
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { addGPT} = GPTSlice.actions

export default GPTSlice.reducer