/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosStar } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { toogel, Type } from "../store/toogel";
import { useParams, Link, useNavigate } from "react-router-dom";
import handleHeartClick from "../handleHeartClick";
function FilterShop() {
  const params = useParams();
  const navigate = useNavigate();
  const handlePorduct = (Porduct) => {
    navigate(`/shop/PorductID/${Porduct}`);
  };

  const Products = useSelector((state) => state.Products);
  const wishlist = useSelector((state) => state.wishlist);
  const Dispatch = useDispatch();
  const wishlistIds = new Set(wishlist.map((item) => item.id));

  const Calid = Products.filter((item) =>
    item.Categories.includes(params.cat)
  ).map((e) => {
    return (
      <div
        className="rounded-2xl  border border-neutral-200 p-4  text-center group duration-[0.4s] hover:scale-105 "
        key={e.id}
      >
        <div className=" relative  cursor-pointer">
          <button onClick={() =>handlePorduct(e.id)}>
            <img src={e.img} className="w-full" alt="tems" />
          </button>

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
  return <>{Calid}</>;
}

export default FilterShop;
