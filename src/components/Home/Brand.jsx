/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  brand_7,
} from "../../assets";
function Brand() {
  return (
    <Swiper
      className="container my-6"
      slidesPerView={1}
      spaceBetween={40}
      breakpoints={{
        1200: {
          slidesPerView: 6,
        },
        700: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 2,
        },
      }}
      loop
    >
      {[brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7].map(
        (e, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="  mx-auto opacity-25 duration-[.4s] hover:opacity-70 cursor-pointer"
                src={e}
                alt={e}
              />
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}

export default Brand;
