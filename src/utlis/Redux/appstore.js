import { configureStore } from '@reduxjs/toolkit'
import usersliceReducer from './userslice'

 const appstore = configureStore({
  reducer: {
    user: usersliceReducer,
  },
})
export default appstore