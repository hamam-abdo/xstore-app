/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const toogeltSlice = createSlice({
  name: "toogel",
  initialState: { Popp: false, Type: "", Or: "", login: false },
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
    login: (state) => {
      return { ...state, login: !state.login }; // تصحيح هنا
    },
  },
});
export const { toogel, Type, Or, login } = toogeltSlice.actions;

export default toogeltSlice.reducer;
