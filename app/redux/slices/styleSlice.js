import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lTransition: 0,
  oTransition: 0,
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setLTransition: (state, action) => {
      state.lTransition = action.payload;
    },
    setOTransition: (state, action) => {
      state.oTransition = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLTransition, setOTransition } = styleSlice.actions;

export const selectLTransition = (state) => state.styleSlice.lTransition;
export const selectOTransition = (state) => state.styleSlice.oTransition;

export default styleSlice.reducer;
