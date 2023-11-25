import { createSlice } from '@reduxjs/toolkit'



 const languageSlice = createSlice({
  name: 'configureLanguage',
  initialState:{
    default:"english"
  },
  reducers: {
    changeLang:(state,actions)=>{
    state.default= actions.payload
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { changeLang} = languageSlice.actions

export default languageSlice.reducer