import { configureStore } from "@reduxjs/toolkit";
import cartModelSlice from "./slices/cartModelSlice";
import productsSlice from "./slices/productsSlice";
import styleSlice from "./slices/styleSlice";
export const store = configureStore({
  reducer: {
    styleSlice,
    cartModelSlice,
    productsSlice,
  },
});
