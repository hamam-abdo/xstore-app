/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { GoChevronRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
function Heading({ text, h1, p }) {
  return (
    <div className=" container">
      <div className=" heading flex  items-center   border-t border-neutral-300 py-5 text-neutral-500 text-xs font-medium ">
        <NavLink to={"/Home"} className="duration-[0.4s]  hover:opacity-70">Home</NavLink>
        <GoChevronRight /> {text}
      </div>
      <div className=" text-center my-10  lg:px-[12%] xl:px-[22%]">
        <h1 className=" text-max_color  text-[40px]  font-medium mb-5">{h1}</h1>
        <p className=" text-neutral-500  text-lg ">{p}</p>
      </div>
    </div>
  );
}

export default Heading;
