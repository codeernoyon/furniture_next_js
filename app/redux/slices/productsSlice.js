import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  productNav: false,
  filterItem: null,
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
    setFilerItem: (state, action) => {
      state.filterItem = action.payload;
    },
  },
});
export const { setProducts, setProductNav, setFilerItem } =
  productsSlice.actions;

export const selectProducts = (state) => state.productsSlice.products;
export const selectProductNav = (state) => state.productsSlice.productNav;
export const selectFilterItem = (state) => state.productsSlice.filterItem;

export default productsSlice.reducer;
