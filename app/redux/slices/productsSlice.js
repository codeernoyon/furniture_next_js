import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  productNav: false,
};

const productsSlice = createSlice({
  name: "productsItem",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductNav: (state, action) => {
      state.productNav = action.payload;
    },
  },
});
export const { setProducts, setProductNav } = productsSlice.actions;

export const selectProducts = (state) => state.productsSlice.products;
export const selectProductNav = (state) => state.productsSlice.productNav;

export default productsSlice.reducer;
