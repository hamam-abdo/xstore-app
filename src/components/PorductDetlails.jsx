/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { cart_i } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import { LuEye, LuMinus, LuHeart } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Testing from "./Testing";
import { useParams, Link } from "react-router-dom";
import Heading from "./Heading";
import { Maxitems } from "../constants";

import handleHeartClick from "../handleHeartClick";
import { useNavigate } from "react-router-dom";
function PorductDetlails() {
  const params = useParams();

  const navigate = useNavigate();

  const handlecategory = (category) => {
    navigate(`/shop/Products/category/${category}`);
  };
  const handlePorduct = (Porduct) => {
    navigate(`/shop/PorductID/${Porduct}`);
  };

  const Dispatch = useDispatch();
  const [cunter, setcunter] = useState(1);
  const Products = useSelector((state) => state.Products);

  const wishlist = useSelector((state) => state.wishlist);
  const wishlistIds = new Set(wishlist.map((item) => item.id));

  let text;
  const children = Products.filter((item) => item.id == params.id).map((el) => {
    text = el.Categories[0];
    return (
      <div
        className="  container flex  gap-10 mb-4 flex-col xl:flex-row"
        key={el.id}
      >
        <div className="flex gap-10 items-start flex-1 flex-col md:flex-row">
          <div className="rounded-2xl  border border-neutral-200  flex-1 xl:mt-14  ">
            <Testing img={el.img} />
          </div>
          <div className="text flex-1 xl:mt-14 ">
            <h1 className="  text-[27px]  my-5  text-max_color">{el.title}</h1>
            <div className="flex items-center   ">
              <IoIosStar color="#fdd835" size={20} />
              <IoIosStar color="#fdd835" size={20} />
              <IoIosStar color="#fdd835" size={20} />
              <IoIosStar color="#fdd835" size={20} />
              <IoIosStar color="#fdd835" size={20} />
              <p className="ml-2  text-[14px]"> (1 customer review)</p>
            </div>
            <p className=" text-[#777777] text-lg my-5">{el.price}</p>
            <h2 className="my-3  flex sm:items-center gap-1  ">
              <LuEye size={20} /> 44 people are viewing this product right now
            </h2>
            <p className=" text-lg !leading-[1.7]  text-[#777777] font-normal ">
              This Bluetooth speaker delivers big sound, making it then only
              music system you’ll need in or out of the house. Prem materials
              such as anodized aluminum & durable polymers withstand the rigor
              of an active lifestyle.
            </p>
            <div className="flex items-center gap-3 my-5">
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
                  handleHeartClick(
                    el,
                    "Cart",
                    true,
                    Dispatch,
                    wishlistIds,
                    cunter
                  );
                }}
                className=" flex items-center text-[12px]  text-lg  gap-2 py-3 px-5 bg-min_color  w-[270px]  h-14  justify-center duration-[0.4s] hover:bg-max_color rounded-full text-white font-medium  cursor-pointer "
              >
                <img src={cart_i} alt="cart" className="w-5 " />
                <span> Add to Cart </span>
              </button>
            </div>
            <div
              onClick={() => {
                handleHeartClick(el, "Seva", false, Dispatch, wishlistIds);
              }}
              className="flex   items-center gap-2 w-fit  cursor-pointer"
            >
              <LuHeart
                fill={wishlistIds.has(el.id) ? "#2a74ed" : "white"}
                color={wishlistIds.has(el.id) ? "#2a74ed" : ""}
                size={22}
              />
              <span>Add to wishlist</span>
            </div>
            <p className="my-3">
              SKU : <span className=" text-min_color">{el.SKU}</span>
            </p>
            <p className="my-3">
              Categories :{" "}
              {el.Categories.map((cat, index) => {
                return (
                  <span
                    key={index}
                    className="  text-min_color duration-[0.4s] hover:text-max_color"
                  >
                    {cat}
                    {index !== el.Categories.length - 1 && " , "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className="   w-full md:w-[60%] mx-auto flex gap-5 flex-col   xl:w-[25%]">
          <div className="p-8 border  border-neutral-300  rounded-2xl flex-1 ">
            <h1 className=" pb-3 border-b mb-5 border-neutral-300 text-max_color font-medium text-lg">
              Product categories
            </h1>
            {Maxitems.map((cat) => {
              return (
                <p key={cat.id} className="my-2 flex gap-2 text-[#888]">
                  <button
                    className={` ${
                      cat.head_title == text && "text-max_color"
                    } relative       duration-[.4] hover:text-max_color  pb-1 after:absolute after:content-[''] after:h-[1px]  after:w-0 after:bg-max_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full`}
                    onClick={() => handlecategory(cat.id)}
                  >
                    {cat.head_title}
                  </button>
                  <span>({cat.length})</span>
                </p>
              );
            })}
          </div>
          <div className="p-8 border   border-neutral-300  rounded-2xl flex-1 ">
            <h1 className=" pb-3 border-b mb-5 border-neutral-300 text-max_color font-medium text-lg">
              Products
            </h1>
            <div className="scrollbar h-[350px]  overflow-x-hidden overflow-y-auto pr-12">
              {Products.filter((item) => item.Categories.includes(text)).map(
                (el) => {
                  return (
                    <div className="flex  gap-4 items-center  my-4" key={el.id}>
                      <div className="flex-[.4]">
                        <img src={el.img} alt="img" />
                      </div>
                      <div className="    overflow-hidden  flex-1  text-left  ">
                        <h1  onClick={()=> handlePorduct(el.id)} className="truncate  duration-[0.4s]  text-max_color  cursor-pointer  hover:text-[#888]   font-medium  ">
                          {el.title}
                        </h1>
                        <p className=" text-[#777777]  mt-2">{el.price}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Heading text={text} />
      {children}
    </>
  );
}

export default PorductDetlails;
