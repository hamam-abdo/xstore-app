import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Products";
import wishlistSlice from "./wishlist";
import cartSlice from "./cart";
import toogeltSlise from "./toogel";
export const store = configureStore({
  reducer: {
    Products: ProductsSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    toogle: toogeltSlise,
  },
});
export default store;
