/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperItme from "./SwiperItme";
import { Link } from "react-router-dom";
function HubItems({ Items }) {
  const Calid = Items.map((el) => {
    return (
      <SwiperSlide key={el.id}>
        <Link  to={`Products/category/${el.id}`}>
          <div className=" absolute z-10 top-5  sm:top-10  lg:top-5 2xl:top-10 left-2/4  translate-x-[-50%]  text-center ">
            <h1 className=" text-xl  sm:text-2xl lg:text-sm  xl:text-xl  2xl:text-2xl   font-medium text-max_color  ">
              {el.head_title}
            </h1>
            <p className=" pt-3 text-neutral-500 text-xs ">{el.min_title} </p>
          </div>
          <img
            src={el.img}
            className=" relative mx-auto md:mx-0 duration-[0.4s] hover:scale-110"
            alt="items"
          />
        </Link>
      </SwiperSlide>
    );
  });

  return <SwiperItme Items={Calid} show={false} />;
}

export default HubItems;
