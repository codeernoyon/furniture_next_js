import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./slices/styleSlice";
export const store = configureStore({
  reducer: {
    styleSlice,
  },
});
