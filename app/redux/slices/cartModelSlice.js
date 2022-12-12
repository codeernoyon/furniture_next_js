import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const cartModelSlice = createSlice({
  name: "cartModel",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpen } = cartModelSlice.actions;

export const selectOpen = (state) => state.cartModelSlice.open;

export default cartModelSlice.reducer;
