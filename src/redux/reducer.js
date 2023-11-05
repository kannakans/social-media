import { combineReducers } from "@reduxjs/toolkit";

import userSlice from './userSlice'
import themeSlice from './theme'
import postSlice from './theme'

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeSlice,
  post: postSlice,
})

export { rootReducer }
