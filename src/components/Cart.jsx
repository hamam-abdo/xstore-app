/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delet } from "../assets";
import { deleteFromCart, clearCarts } from "../store/cart";
import { deleteFromwishlist, clearwishlist } from "../store/wishlist";
import { Link } from "react-router-dom";
import { toogel } from "../store/toogel";

function Cart({ img, text, state }) {
  const Or = useSelector((state) => state.toogle.Or);
  const Dispatch = useDispatch();
  const totalPrice = state.reduce((acc, product) => {
    acc += product.prices * product.quantity;
    return acc;
  }, 0);

  const deletHadler = (id) => {
    const action = Or === "Cart" ? deleteFromCart : deleteFromwishlist;
    Dispatch(action(id));
  };
  const clearHadler = () => {
    const action = Or === "Cart" ? clearCarts : clearwishlist;
    Dispatch(action());
  };



  const handleClick = () => {
    Dispatch(toogel());
  };

  return (
    <>
      <div className=" mb-4  text-center ">
        <div className=" relative w-fit mx-auto">
          <img src={img} alt="img" className="w-6  " />
          <span className=" absolute text-xs -top-1 z-10 -right-2  w-4 h-4 rounded-full bg-[#e1e1e1] flex items-center justify-center">
            {state.length}
          </span>
        </div>

        <h2 className="  w-fit uppercase  my-5 mx-auto cursor-pointer relative  text-xl text-max_color after:absolute after:content-[''] after:h-[2px]  after:w-0 after:bg-max_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  ">
          {text}
        </h2>
        {state.length == 0 ? (
          <h1>
            {Or == "Cart"
              ? "No products in the cart."
              : "No products in the wishlist."}
          </h1>
        ) : (
          <>
            <div className="  scrollbar h-[550px]  overflow-x-hidden overflow-y-auto">
              {state.map((Podcast) => {
                return (
                  <div
                    className="flex   items-center  group gap-5  py-3   border-b border-neutral-300"
                    key={Podcast.id}
                  >
                    <div className="flex-[.4]">
                      <img src={Podcast.img} alt="Podcast" />
                    </div>

                    <div className="  pt-5 pr-6  overflow-hidden  flex-1  text-left relative ">
                      <Link
                        to={`/shop/PorductID/${Podcast.id}`}
                        onClick={() => handleClick()}
                        className="truncate block  duration-[0.4s]  text-max_color  cursor-pointer  hover:text-[#888] sm:text-[17px] font-medium  "
                      >
                        {Podcast.title}
                      </Link>

                      <p className=" my-1 sm:my-2">
                        {Or === "Cart" ? (
                          <>
                            {Podcast.quantity} X {Podcast.price}
                          </>
                        ) : (
                          <>{Podcast.price}</>
                        )}
                      </p>

                      <p>SKU : {Podcast.SKU}</p>
                      <img
                        onClick={() => deletHadler(Podcast)}
                        src={delet}
                        alt="delet"
                        className=" absolute top-5 rotate-[40deg]  group-hover:rotate-0 group-hover:right-1 opacity-60  duration-[0.4s] hover:opacity-100 cursor-pointer -right-5 w-5"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {Or == "Cart" ? (
              <div className=" my-5 flex justify-between">
                <h2>SUBTOTAL:</h2>
                <span>${totalPrice}.00</span>
              </div>
            ) : (
              ""
            )}
            <button
              onClick={() => clearHadler()}
              className="  py-3 w-full bg-min_color  duration-[0.4s] hover:bg-max_color rounded-full text-white font-medium "
            >
              {Or == "Cart" ? " Clear Cart" : "Clear Wishlist"}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
