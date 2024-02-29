/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosStar } from "react-icons/io";
import { useDispatch , useSelector } from "react-redux";
import { addToCart } from "../../store/cart";
import { toogel, Type, Or } from "../../store/toogel";
function Hover({ text, show }) {
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.Products);
  const filterItems = Products.filter((item) => item.id == text);
  const getTooltipStyle = (id) => {
    switch (id) {
      case 1:
        return "right-12 -top-40 sm:-top-44  after:border-l-white after:top-1/2 after:translate-y-[-50%] after:left-full";
      case 4:
        return "top-12 -right-20 sm:-right-28  after:border-b-white after:-top-[16px] after:left-1/2 after:translate-x-[-50%]";
      case 2:
        return "left-12 -top-40 sm:-top-44 after:top-1/2 after:translate-y-[-50%] after:border-r-white after:right-full";
      default:
        return "bottom-12 -right-[75px] sm:-right-[110px]  after:border-t-white after:-bottom-[16px] after:left-1/2 after:translate-x-[-30%]";
    }
  };
  const handleHeartClick = (item) => {
    Dispatch(addToCart({ item, quantity: 1 })),
      Dispatch(toogel()),
      Dispatch(Type("Cart")),
      Dispatch(Or("Cart"));
  };
  return (
    show && (
      <>
        {filterItems.map((item) => (
          <div
            key={item.id}
            className={`absolute w-48  sm:w-64 text-center z-10 shadow-xl text-black rounded-md ${getTooltipStyle(
              text
            )} py-3 px-7 bg-white after:border-[8px] after:border-transparent after:absolute after:content-['']   animate-[scale_.5s]  `}
          >
            <img src={item.img} alt="item" />
            <h1 className=" text-max_color font-medium text-sm sm:text-[16px]">
              {item.title}
            </h1>
            <p className=" text-neutral-500 font-normal text-sm  my-3 ">
              {item.price}
            </p>
            <div className="flex justify-center">
              <IoIosStar color="#fdd835" />
              <IoIosStar color="#fdd835" />
              <IoIosStar color="#fdd835" />
              <IoIosStar color="#fdd835" />
              <IoIosStar color="#fdd835" />
            </div>
            <button
              onClick={() => {
                handleHeartClick(item);
              }}
              className="py-2 px-7 bg-max_color rounded-md text-white font-medium my-3"
            >
              Add to cart
            </button>
          </div>
        ))}
      </>
    )
  );
}

export default Hover;
