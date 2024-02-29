import { createSlice } from "@reduxjs/toolkit";
/* eslint-disable no-unused-vars */

const cartSlise = createSlice({
  name: "cart",

  initialState: [],
  reducers: {
    

    addToCart: (state, action) => {
      const find = state.find(
        (product) => product.id === action.payload.item.id
      );
      if (find) {
        find.quantity += action.payload.quantity;
      } else {
        const productClone = {
          ...action.payload.item,
          quantity: action.payload.quantity,
        };

        state.push(productClone);
      }
    },

    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCarts: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, deleteFromCart, clearCarts } =
  cartSlise.actions;
export default cartSlise.reducer;
