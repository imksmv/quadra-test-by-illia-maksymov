import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NumberState {
  value: number
}

const initialState: NumberState = {
  value: 0,
}

export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { setNumber } = numberSlice.actions

export default numberSlice.reducer
