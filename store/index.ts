import { configureStore } from "@reduxjs/toolkit"
import numberReducer from "@/slices/numberSlice"

export const store = configureStore({
  reducer: {
    number: numberReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
