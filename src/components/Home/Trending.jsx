/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperItme from "./SwiperItme";
import { IoIosStar } from "react-icons/io";
import { LuHeart, LuEye } from "react-icons/lu";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { toogel, Type } from "../../store/toogel";
import { Link } from "react-router-dom";
import handleHeartClick from "../../handleHeartClick";
function Trending() {
  const Products = useSelector((state) => state.Products);
  const wishlist = useSelector((state) => state.wishlist);
  const Dispatch = useDispatch();
  const wishlistIds = new Set(wishlist.map((item) => item.id));

  const Calid = Products.filter((item) => item.Trending == "true").map((el) => {
    return (
      <SwiperSlide
        key={el.id}
        className="  rounded-2xl  border border-neutral-300 p-8 mb-12  "
      >
        <div className=" relative duration-[0.4s] hover:scale-105  group/edit overflow-hidden">
          <img
            src={el.img}
            className=" relative cursor-pointer mx-auto md:mx-0 "
            alt="items"
          />

          <Link
            to={`Products/category/${el.Categories[0]}`}
            className=" text-neutral-700  text-lg my-2 "
          >
            {el.Categories[0]}
          </Link>

          <h1 className=" text-max_color font-medium  text-base">{el.title}</h1>
          <div className="flex my-2 ">
            <IoIosStar color="#fdd835" size={20} />
            <IoIosStar color="#fdd835" size={20} />
            <IoIosStar color="#fdd835" size={20} />
            <IoIosStar color="#fdd835" size={20} />
            <IoIosStar color="#fdd835" size={20} />
          </div>
          <p className=" text-neutral-700 font-normal text-base  my-3 ">
            {el.price}
          </p>
          <div className=" absolute  top-1/2  translate-y-[-50%] duration-[0.4s] -right-10 group-hover/edit:right-0 bg-black  ">
            <div className="p-2    duration-[0.4s]  hover:bg-[#262626]  cursor-pointer">
              <LiaShoppingCartSolid
                color="white"
                size={22}
                onClick={() => {
                  handleHeartClick(el, "Cart", true, Dispatch, wishlistIds, 1);
                }}
              />
            </div>
            <div className="p-2 duration-[0.4s]  hover:bg-[#262626]  border-y cursor-pointer border-neutral-700 ">
              <LuHeart
                fill={wishlistIds.has(el.id) ? "#2a74ed" : ""}
                color={wishlistIds.has(el.id) ? "#2a74ed" : "white"}
                onClick={() => {
                  handleHeartClick(el, "Seva", false, Dispatch, wishlistIds);
                }}
                size={22}
              />
            </div>
            <div className="p-2  duration-[0.4s]  hover:bg-[#262626] cursor-pointer">
              <LuEye
                color="white"
                size={22}
                onClick={() => {
                  Dispatch(toogel()), Dispatch(Type(el.id));
                }}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <SwiperItme
      Items={Calid}
      show={true}
      pagination={true}
      Text={"Shop Our Trending Items"}
    />
  );
}

export default Trending;
