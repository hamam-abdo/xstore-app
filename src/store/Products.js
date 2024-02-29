import { createSlice } from "@reduxjs/toolkit";
import { Fullitems } from "../constants";
const prodcstsSlise = createSlice({
  name: "prodcsts",
  initialState: Fullitems,
  reducers: {},
});

export default prodcstsSlise.reducer;
