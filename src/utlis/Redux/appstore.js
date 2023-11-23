import { configureStore } from '@reduxjs/toolkit'
import usersliceReducer from './userslice'
import moviesliceReducer from './movieslice'

 const appstore = configureStore({
  reducer: {
    user: usersliceReducer,
    movie:moviesliceReducer
  },
})
export default appstore