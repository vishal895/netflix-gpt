import { configureStore } from '@reduxjs/toolkit'
import usersliceReducer from './userslice'
import moviesliceReducer from './movieslice'
import GptSliceReducer from './GptSlice'
import LanguageSliceReducer from './LanguageSlice'

 const appstore = configureStore({
  reducer: {
    user: usersliceReducer,
    movie:moviesliceReducer,
    GPT:GptSliceReducer,
    configureLanguage:LanguageSliceReducer
  },
})
export default appstore