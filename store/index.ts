import { configureStore } from "@reduxjs/toolkit"
import numbersReducer from "@/slices/numbersSlice"

export const store = configureStore({
  reducer: {
    numbers: numbersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
