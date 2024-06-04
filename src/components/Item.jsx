/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { cart_i } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { Type, Or } from "../store/toogel";
import { addToCart } from "../store/cart";
import { addTowishlist, deleteFromwishlist } from "../store/wishlist";
import { IoIosStar } from "react-icons/io";
import { LuEye, LuMinus, LuHeart } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

function Item({ id }) {
  const Dispatch = useDispatch();
  const [cunter, setcunter] = useState(1);
  const Products = useSelector((state) => state.Products);

  const wishlist = useSelector((state) => state.wishlist);
  const wishlistIds = new Set(wishlist.map((item) => item.id));
  const handleHeartClick = (item, action, add) => {
    const actionAdd = add ? addToCart : addTowishlist;
    const isInWishlist = wishlistIds.has(item.id);
    if (add) {
      Dispatch(actionAdd({ item, quantity: cunter }));
      Dispatch(Type("Cart"));
      Dispatch(Or(action));
    } else {
      if (!isInWishlist) {
        Dispatch(actionAdd(item));
        Dispatch(Type("Cart"));
        Dispatch(Or(action));
      } else {
        Dispatch(deleteFromwishlist(item));
      }
    }
  };
  const children = Products.filter((item) => item.id == id).map((el) => {
    return (
      <div key={el.id}>
        <h1 className=" text-lg sm:text-2xl  font-medium text-max_color">
          {el.title}
        </h1>
        <img src={el.img} alt="el" className="sm:h-[400px]" />
        <p className=" text-[#888] text-lg">{el.price}</p>
        <div className="flex items-center   ">
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <p className="ml-2  text-[14px]"> (1 customer review)</p>
        </div>
        <h2 className="my-3  flex sm:items-center gap-1  ">
          <LuEye size={20} /> 44 people are viewing this product right now
        </h2>
        <p className=" text-base !leading-[1.7]  text-[#444444] font-normal ">
          This Bluetooth speaker delivers big sound, making it then only music
          system you’ll need in or out of the house. Prem materials such as
          anodized aluminum & durable polymers withstand the rigor of an active
          lifestyle.
        </p>
        <div className="flex items-center gap-3 my-3">
          <div className="flex items-center gap-2">
            <div className="p-1 border  border-neutral-300  opacity-70 duration-[0.4s]  hover:opacity-100 cursor-pointer">
              <LuMinus
                size={18}
                onClick={() => (cunter > 1 ? setcunter(cunter - 1) : null)}
              />
            </div>
            <span>{cunter}</span>
            <div className="p-1 border  border-neutral-300  opacity-70 duration-[0.4s] hover:opacity-100  cursor-pointer ">
              <GoPlus size={18} onClick={() => setcunter(cunter + 1)} />
            </div>
          </div>
          <button
            onClick={() => {
              handleHeartClick(el, "Cart", true);
            }}
            className=" flex items-center text-[12px]  sm:text-base gap-2 py-3 px-5 bg-min_color  duration-[0.4s] hover:bg-max_color rounded-full text-white font-medium w-fit cursor-pointer "
          >
            <img src={cart_i} alt="cart" className="w-5 " />
            <span> Add to Cart </span>
          </button>
        </div>
        <div
          onClick={() => {
            handleHeartClick(el, "Seva", false);
          }}
          className="flex   items-center gap-2 w-fit  cursor-pointer"
        >
          <LuHeart
            fill={wishlistIds.has(el.id) ? "#2a74ed" : "white"}
            color={wishlistIds.has(el.id) ? "#2a74ed" : ""}
            size={22}
          />
          <span>Browse wishlist</span>
        </div>
        <p className="mt-3">
          SKU : <span className=" text-[#888]">{el.SKU}</span>
        </p>
      </div>
    );
  });
  return <div>{children}</div>;
}

export default Item;
