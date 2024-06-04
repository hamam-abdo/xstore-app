/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
function Account({ img, text }) {
  const [toogel, settoogel] = useState(true);
  return (
    <>
      <div className=" mb-4  text-center ">
        <div className=" relative w-fit mx-auto">
          <img src={img} alt="img" className="w-6 " />
        </div>
        <h2 className="  w-fit uppercase  my-4 mx-auto cursor-pointer relative  text-xl text-max_color after:absolute after:content-[''] after:h-[2px]  after:w-0 after:bg-max_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  ">
          {text}
        </h2>
        <div className="flex  justify-around mt-8  relative after:absolute after:content-[''] after:h-[1px] after:bg-neutral-400 after:w-full after:-bottom-3  ">
          <span
            onClick={() => settoogel(true)}
            className={`
             ${
               toogel ? " text-max_color  font-medium  " : " text-neutral-500"
             }  
            relative  cursor-pointer flex-1 after:absolute after:content-[''] after:h-[2px]  after:w-0 after:bg-max_color after:-bottom-3 after:z-10  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full`}
          >
            LOGIN
          </span>
          <span
            onClick={() => settoogel(false)}
            className={`
            ${!toogel ? " text-max_color  font-medium  " : " text-neutral-500"} 
            relative cursor-pointer flex-1 after:absolute after:content-[''] after:h-[2px]  after:w-0 after:bg-max_color after:-bottom-3 after:z-10 after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  `}
          >
            REGISTER
          </span>
        </div>
        {toogel ? <Login /> : <Register />}
      </div>
    </>
  );
}

export default Account;
