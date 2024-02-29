/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function SwiperItme({ Items, show, Text, pagination, View }) {
  const Next = useRef(null);
  const Prev = useRef(null);

  return (
    <div className=" container py-10">
      {Text != undefined ? (
        <h1 className=" w-fit text-3xl sm:text-4xl  text-max_color font-medium mb-20  mx-auto relative before:absolute before:contents-[''] before:bg-min_color before:w-2/4 before:h-1 before:rounded-md before:bottom-[-20px] before:left-1/2 before:translate-x-[-50%]">
          {Text}
        </h1>
      ) : (
        ""
      )}
      <Swiper
        className="group  mb-10 "
        modules={pagination ? [Navigation, Pagination] : [Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = Prev.current;
          swiper.params.navigation.nextEl = Next.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-max_color opacity-100",
        }}
        loop
        breakpoints={
          View
            ? {
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                750: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }
            : {
                1250: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }
        }
      >
        {show ? (
          <>{Items}</>
        ) : (
          <>
            {Items}
            {Items}
          </>
        )}

        <button
          ref={Prev}
          className=" absolute top-2/4 z-50 left-0  sm:left-[-40px] group-hover:left-0 duration-[0.5s] translate-y-[-50%]   bg-white w-10 h-10 flex items-center justify-center rounded-full  border  border-[#222] opacity-25 hover:opacity-100 "
        >
          <GoArrowLeft size={20} color="#222" />
        </button>
        <button
          ref={Next}
          className=" absolute top-2/4 z-50 right-0 sm:right-[-40px] group-hover:right-0 duration-[0.5s] translate-y-[-50%]  bg-white w-10 h-10 flex items-center justify-center rounded-full  border border-[#222]   opacity-25 hover:opacity-100"
        >
          <GoArrowRight size={20} color="#222" />
        </button>
      </Swiper>
    </div>
  );
}

export default SwiperItme;
