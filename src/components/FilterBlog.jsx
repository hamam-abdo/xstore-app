/* eslint-disable no-unused-vars */
import React from "react";
import { articals } from "../constants";
import { GoArrowRight } from "react-icons/go";
import { useParams } from "react-router-dom";
function FilterBlog() {
  const params = useParams();

  const Calid = articals
    .filter((item) => item.Categories.includes(params.cat))
    .map((el) => {
      return (
        <div key={el.id}>
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
              {el.Post.filter((_, indx) =>
                [0, 1, 3, 4, 5, 6].includes(indx)
              ).map((e, indx) => (
                <span key={indx}>{e}</span>
              ))}
            </div>
            <a
              href="#"
              className=" relative flex w-fit  items-center  text-min_color my-4  group/edit  text-sm after:absolute after:content-[''] after:h-[1px]  after:w-0 after:bg-min_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  "
            >
              <span>Continue Reading</span>
              <GoArrowRight
                size={15}
                className=" group-hover/edit:animate-[ml_0.3s_ease-in-out]  ml-1 "
              />
            </a>
          </div>
        </div>
      );
    });

  return <>{Calid}</>;
}

export default FilterBlog;
