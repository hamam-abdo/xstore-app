import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable no-unused-vars */
const toogeltSlise = createSlice({
  name: "toogel",
  initialState: { Popp: false, Type: "", Or: "" },
  reducers: {
    toogel: (state) => {
      return { ...state, Popp: !state.Popp };
    },
    Type: (state, action) => {
      return { ...state, Type: action.payload };
    },
    Or: (state, action) => {
      return { ...state, Or: action.payload };
    },
    // deleteFromwishlist: (state, action) => {},
    // clearwishlist: (state, action) => {},
  },
});
export const { toogel, Type, Or } = toogeltSlise.actions;

export default toogeltSlise.reducer;
