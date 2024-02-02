import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NumbersState {
  value: number
}

const initialState: NumbersState = {
  value: 0,
}

export const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    setNumbers: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setNumbers } = numbersSlice.actions

export default numbersSlice.reducer
