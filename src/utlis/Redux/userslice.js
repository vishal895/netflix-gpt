import { createSlice } from '@reduxjs/toolkit'



 const userSlice = createSlice({
  name: 'user',
  initialState:null,
  reducers: {
    adduser:(state,action)=>{
    return action.payload
    },
    removeuser:(state,action)=>{
        return null
        },
    
  },
})

// Action creators are generated for each case reducer function
export const { adduser,removeuser } = userSlice.actions

export default userSlice.reducer