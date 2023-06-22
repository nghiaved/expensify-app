import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from './slices/user'

export const store = configureStore({
  reducer: {
    user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})