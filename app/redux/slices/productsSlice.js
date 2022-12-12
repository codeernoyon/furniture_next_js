import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

const productsSlice = createSlice({
  name: "productsItem",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { setProducts } = productsSlice.actions;

export const selectProducts = (state) => state.productsSlice.products;

export default productsSlice.reducer;
