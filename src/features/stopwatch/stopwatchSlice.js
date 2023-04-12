import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elapsed: 0,
};

export const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(action.payload);
      state.elapsed = action.payload >= 86400 ? 1 : action.payload;
    },
  },
});

export const {
  update,
} = stopwatchSlice.actions;

export default stopwatchSlice.reducer;
