/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { elementor } from "../../assets";
import { TfiPlus } from "react-icons/tfi";
import Hover from "./Hover";
import { NavLink } from "react-router-dom";
function Elementor() {
  const [content, setContent] = useState();
  const refs = useRef([]);

  const handleMouseEnter = (index, content) => {
    setContent(content);
    refs.current[index] = true;
  };

  const handleMouseLeave = (index) => {
    setContent();
    refs.current[index] = false;
  };

  return (
    <div className="container flex my-20 flex-col gap-20 lg:gap-0 lg:flex-row">
      <div className="flex-1 relative">
        <img src={elementor} alt="elementor" />
        <div className="absolute top-0 w-full h-full">
          {[
            { position: "absolute", top: "40%", left: "70%" },
            { position: "absolute", bottom: "40%", left: "15%" },
            { position: "absolute", bottom: "9%", right: "18%" },
            { position: "absolute", top: "7%", left: "33%" },
          ].map((style, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index, index + 1)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={style}
            >
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full animate-[puls_2s_ease-in-out_infinite]">
                <TfiPlus />
              </div>
              <Hover text={content} show={refs.current[index]} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 lg:mx-14 xl:pt-7 2xl:pt-14">
        <span className="text-xs font-normal tracking-widest text-neutral-500">
          XSTORE ELEMENTOR MINIMAL ELECTRONICS DEMO
        </span>
        <h1 className="leading-[1.3] text-3xl xl:text-[45px] text-max_color font-medium mt-4 relative before:absolute before:contents-[''] before:bg-min_color before:w-1/4 before:h-1 before:rounded-md before:bottom-[-20px]">
          Lookout Smart products here, there, everywhere.
        </h1>
        <p className="text-sm xl:text-[18px] text-neutral-500 font-normal mb-5 mt-10 leading-8 max-w-[550px]">
          Save when you shop the Best Buy Outlet for clearance, open-box,
          refurbished and pre-owned items save more with coupons and 70% off.
          Super value deals 2022.
        </p>
        <NavLink
          to={"/Shop"}
          className="py-3 px-7 block w-fit bg-min_color rounded-full text-white font-medium z-10 overflow-hidden relative before:absolute before:-z-10 before:contents-[''] before:w-full before:h-full before:rounded-full before:left-0 before:top-full before:bg-max_color hover:before:top-0 before:duration-[.4s]"
        >
          View All Products
        </NavLink>
      </div>
    </div>
  );
}

export default Elementor;
