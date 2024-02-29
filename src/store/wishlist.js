import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-unused-vars */
const wishlistSlise = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addTowishlist: (state, action) => {
      const find = state.find((product) => product.id === action.payload.id);
      if (!find) {
        state.push(action.payload);
      }
    },

    deleteFromwishlist: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },

    clearwishlist: (state, action) => {
      return [];
    },
  },
});
export const { addTowishlist, deleteFromwishlist, clearwishlist } =
  wishlistSlise.actions;
export default wishlistSlise.reducer;
