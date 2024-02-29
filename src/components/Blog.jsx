/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Heading from "./Heading";
import { articals, articals_Categories } from "../constants";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
function Blog() {
  const [hidden, sethidden] = useState(false);
  const Calid = articals.map((el) => {
    return (
      <div
        key={el.id}
        className={`${
          el.id == 10
            ? `relative xl:left-[calc(200%+80px)] ${
                hidden ? " block" : "hidden"
              } `
            : ""
        }`}
      >
        <div className="  relative  rounded-2xl  overflow-hidden group">
          <img
            src={el.img}
            className=" duration-[0.6s]  w-full group-hover:scale-110 "
            alt="items"
          />
        </div>

        <div className="mt-7">
          <h1 className="text-max_color font-medium  text-lg !leading-[1.8]">
            {el.head_title}
            <br />
            {el.min_title}
          </h1>

          <div className=" flex  items-center gap-1  my-2 text-[#888] ">
            {el.Post.filter((_, indx) => [0, 1, 3, 4, 5, 6].includes(indx)).map(
              (e, indx) => (
                <span key={indx}>{e}</span>
              )
            )}
          </div>
          <span className=" cursor-pointer relative flex w-fit  items-center  text-min_color my-4  group/edit  text-sm after:absolute after:content-[''] after:h-[1px]  after:w-0 after:bg-min_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  ">
            <span>Continue Reading</span>
            <GoArrowRight
              size={15}
              className=" group-hover/edit:animate-[ml_0.3s_ease-in-out]  ml-1 "
            />
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      <Heading
        text={"Blog"}
        h1={"Latest News"}
        p={
          "Welcome to the Xstore Electronics Store, a resource for tech enthusiasts. Here you will find the latest news and facts about Xstore Electronics Store."
        }
      />
      <div className="container   flex justify-center gap-3 flex-wrap  ">
        {articals_Categories.map((cat, index) => {
          return (
            <Link
              to={`Articals/category/${cat}`}
              key={index}
              className="  text-sm lg:text-xl py-3 px-7 bg-min_color  duration-[0.4s]      hover:bg-max_color rounded-[10px] text-white font-medium "
            >
              {cat}
            </Link>
          );
        })}
      </div>
      <div className=" container   relative grid grid-cols-bolg max-[400px]:grid-cols-footer  gap-10  mt-20 mb-28">
        {Calid}
      </div>
      {hidden ? (
        ""
      ) : (
        <div className=" text-center -mt-14 mb-14">
          <button
            onClick={() => sethidden(!hidden)}
            className="  py-2 px-7 bg-min_color  duration-[0.4s] hover:bg-max_color rounded-full text-white text-lg font-medium "
          >
            Load More Posts
          </button>
        </div>
      )}
    </>
  );
}

export default Blog;
