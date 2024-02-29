/* eslint-disable no-unused-vars */

import { addToCart } from "./store/cart";
import { addTowishlist, deleteFromwishlist } from "./store/wishlist";
import { toogel, Type, Or } from "./store/toogel";

function handleHeartClick(item, action, add, Dispatch, wishlistIds  , cunter) {
  const actionAdd = add ? addToCart : addTowishlist;
 
  const isInWishlist = wishlistIds.has(item.id);
  if (add) {
    Dispatch(actionAdd({ item, quantity: cunter }));
    Dispatch(toogel());
    Dispatch(Type("Cart"));
    Dispatch(Or(action));
  } else {
    if (!isInWishlist) {
      Dispatch(actionAdd(item));
      Dispatch(toogel());
      Dispatch(Type("Cart"));
      Dispatch(Or(action));
    } else {
      Dispatch(deleteFromwishlist(item));
    }
  }
}
export default handleHeartClick;
