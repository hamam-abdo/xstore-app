/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { GoChevronRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function Filter({ children }) {
  const params = useParams();

  return (
    <>
      <div className=" container heading flex  items-center   border-t border-neutral-300 py-5 text-neutral-500 text-xs font-medium ">
        <NavLink to={"/home"} className="duration-[0.4s]  hover:opacity-70">
          Home
        </NavLink>
        <GoChevronRight />
        {params.Type == "Products" ? (
          <NavLink to={"/Shop"} className="duration-[0.4s]  hover:opacity-70">
            Shop
          </NavLink>
        ) : (
          <NavLink to={"/Blog"} className="duration-[0.4s]  hover:opacity-70">
            Blog
          </NavLink>
        )}
        <GoChevronRight /> {params.cat}
      </div>

      <div
        className={`container grid  ${
          params.Type == "Products" ? "grid-cols-footer" : " grid-cols-bolg max-[400px]:grid-cols-footer"
        } gap-10 mt-20 mb-32`}
      >
        {params.Type == "Products" ? children[0] : children[1]}
      </div>
    </>
  );
}

export default Filter;
