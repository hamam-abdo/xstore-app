/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Linding } from "../../assets";
import { LiaShoppingCartSolid } from "react-icons/lia";

function Linding_home() {
  const [className, setClassName] = useState(false);
  const e = useRef(null);
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setClassName(true);
    }, 4800);
    const Timeout2 = setTimeout(() => {
      if (className) setClassName(false);
    }, 2100);

    return () => {
      clearTimeout(Timeout);
      clearTimeout(Timeout2);
    };
  }, [className]);

  useEffect(() => {
    if (e.current) {
      const typed = new Typed(e.current, {
        strings: ["Drives Emotion", "Changed The World"],
        startDelay: 150,
        backDelay: 3700,
        typeSpeed: 140,
        showCursor: false,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("${Linding}")`,
      }}
      className=" container flex  min-h-[580px]  bg-no-repeat rounded-3xl bg-bottom-center  py-20 "
    >
      <div className=" ml-11 mr-4  pt-10">
        <span className=" text-xs   uppercase font-normal tracking-widest text-neutral-500 ">
          The Next generation
        </span>
        <h1 className="  text-3xl lg:text-5xl text-max_color font-medium mt-4 ">
          Innovation That
        </h1>
        <h1 className=" text-3xl  lg:text-5xl font-medium text-max_color my-4 h-[48px]">
          <span
            className={` ${
              className
                ? " bg-max_color text-white"
                : "relative  after:absolute after:content-['']  after:w-[2px] after:h-5/6 after:top-1/2  after:translate-y-[-50%] after:right-[-5px] after:animate-[blank_0.5s_infinite]"
            } `}
            ref={e}
          ></span>
        </h1>
        <p className="  text-[18px] text-neutral-500 font-normal  my-10 leading-7  max-w-[550px]">
          Get instant alerts for anyone who approaches, even if they don’t press
          the headphone.
        </p>
        <button className=" flex items-center  gap-2 py-3 px-7 bg-min_color  duration-[0.4s] hover:bg-max_color rounded-full text-white font-medium ">
          <LiaShoppingCartSolid size={25} />
          Buy Now
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Linding_home;
