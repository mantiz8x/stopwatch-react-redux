import { configureStore } from "@reduxjs/toolkit";
import stopwatchReducer from "../features/stopwatch/stopwatchSlice";

const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer
  }
});

export default store;
