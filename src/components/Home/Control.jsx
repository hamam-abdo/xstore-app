/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Control({ img, HeadTitle, MinTitle, Button }) {
  return (
    <div className=" relative  rounded-2xl  overflow-hidden group">
      <img
        className=" duration-[0.6s]  group-hover:scale-110"
        src={img}
        alt="bak"
      />
      <div className=" absolute top-1/2  translate-y-[-50%] text-white px-10 lg:px-20 ">
        <span className="  md:text-xs  lg:text-sm font-medium md:tracking-[1.5px] lg:tracking-[3px]  ">
          {HeadTitle}
        </span>
        <h1 className=" lg:text-2xl  xl:text-4xl  font-semibold my-3 lg:my-7">
          {MinTitle}
        </h1>
        <button className=" text-base  md:text-sm lg:text-xl py-3 px-7 bg-min_color  duration-[0.4s]  translate-y-full opacity-0 group-hover:opacity-100    group-hover:translate-y-0   hover:bg-max_color rounded-full text-white font-medium ">
          {Button}
        </button>
      </div>
    </div>
  );
}

export default Control;
