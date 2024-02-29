/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Heading";
import { IoIosStar } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toogel, Type } from "../store/toogel";
import { Maxitems } from "../constants";
import { Link } from "react-router-dom";
import handleHeartClick from "../handleHeartClick";
function Shop() {
  const Products = useSelector((state) => state.Products);
  const wishlist = useSelector((state) => state.wishlist);
  const Dispatch = useDispatch();
  const wishlistIds = new Set(wishlist.map((item) => item.id));

  const Calid = Products.map((e) => {
    return (
      <div
        className="rounded-2xl  border border-neutral-200 p-4  text-center group duration-[0.4s] hover:scale-105 "
        key={e.id}
      >
        <div className=" relative  cursor-pointer">
          <Link to={`PorductID/${e.id}`}>
            <img src={e.img} className="w-full" alt="tems" />
          </Link>

          <LuHeart
            fill={wishlistIds.has(e.id) ? "#2a74ed" : "white"}
            color={wishlistIds.has(e.id) ? "#2a74ed" : ""}
            onClick={() => {
              handleHeartClick(e, "Seva", false, Dispatch, wishlistIds);
            }}
            size={20}
            className="absolute top-2 right-2  duration-[0.4s] opacity-0   group-hover:opacity-100 "
          />
          <button
            onClick={() => {
              Dispatch(toogel()), Dispatch(Type(e.id));
            }}
            className=" bg-[#222] hover:bg-[#333]  text-white w-full  absolute duration-[0.4s]  rounded-3xl p-2 right-0 bottom-4  opacity-0 group-hover:opacity-100"
          >
            Quick shop
          </button>
        </div>

        <h1 className=" text-max_color font-medium  text-base">{e.title}</h1>
        <div className="flex my-2  justify-center">
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
          <IoIosStar color="#fdd835" size={20} />
        </div>
        <p className=" text-[#888]  text-base  font-medium ">{e.price}</p>
        <button
          onClick={() => {
            handleHeartClick(e, "Cart", true, Dispatch, wishlistIds, 1);
          }}
          className="  mt-3 py-2 px-7 bg-min_color  duration-[0.4s] hover:bg-max_color rounded-full text-white text-lg font-medium "
        >
          Add to cart
        </button>
      </div>
    );
  });
  return (
    <>
      <Heading
        text={"Shop"}
        h1={"The Shop"}
        p={
          "Sit euismod mi quam in vulputate amet in. Tincidunt scelerisqueconvallis amet id et viverra euismod aliquam. Tellus malesuada commodo fames laoreet"
        }
      />
      <div className="container   flex justify-center gap-3 flex-wrap  ">
        {Maxitems.map((cat) => {
          return (
            <Link
              to={`Products/category/${cat.id}`}
              key={cat.id}
              className="  text-sm lg:text-xl py-3 px-7 bg-min_color  duration-[0.4s]      hover:bg-max_color rounded-[10px] text-white font-medium "
            >
              {" "}
              {cat.head_title}
            </Link>
          );
        })}
      </div>

      <div className=" container grid grid-cols-footer gap-10 mt-20 mb-32">
        {Calid}
      </div>
    </>
  );
}

export default Shop;
