/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperItme from "./SwiperItme";
import { GoArrowRight } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Articals({ Items }) {
  const Calid = Items.filter((item) => item.Trending == "true").map((el) => {
    return (
      <SwiperSlide key={el.id}>
        <div className="  relative  rounded-2xl  overflow-hidden group/edit">
          <img
            src={el.img}
            className=" duration-[0.6s]  w-full group-hover/edit:scale-110 "
            alt="items"
          />
          <div className=" absolute   text-max_color top-3   left-3 bg-white rounded-full w-14 h-14  grid items-center  justify-center ">
            <h1 className=" text-2xl  -mb-2 font-medium">{el.Month[0]}</h1>
            <p className="  text-base text-neutral-700 ">{el.Month[1]}</p>
          </div>
          <div className="  absolute  bottom-2 left-2 flex gap-2  ">
            {el.Categories.map((cat, indx) => {
              return (
                <Link
                  to={`Articals/category/${cat}`}
                  key={indx}
                  className="py-1 px-2 text-xs  bg-[#5b565a] text-white rounded-md "
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-7">
          <h1 className="text-max_color font-medium  text-lg">
            {el.head_title}
          </h1>
          <Link
            to={"/blog"}
            className=" relative flex w-fit  items-center  text-min_color my-4  group/edit  text-sm after:absolute after:content-[''] after:h-[1px]  after:w-0 after:bg-min_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  "
          >
            <span>Continue Reading</span>
            <GoArrowRight
              size={15}
              className=" group-hover/edit:animate-[ml_0.3s_ease-in-out]  ml-1 "
            />
          </Link>
          <div className=" flex  border-t pt-3 border-neutral-300  text-xs  justify-between">
            <div className="flex gap-1 items-center">
              <div className=" bg-[#c5c5c5] w-5 h-5 rounded-full  flex items-center justify-center">
                <FaUserLarge color="white" size={15} className="mt-1" />
              </div>
              <span className=" text-[#888]">by</span>
              <span className=" text-max_color">Rose Tyler</span>
            </div>
            <div className=" flex  items-center gap-1 ">
              {el.Post.filter((_, indx) => [0, 1, 5, 6].includes(indx)).map(
                (e, indx) => (
                  <span key={indx}>{e}</span>
                )
              )}
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <SwiperItme
      Items={Calid}
      show={true}
      View={true}
      Text={"Top Popular Articals"}
    />
  );
}

export default Articals;
