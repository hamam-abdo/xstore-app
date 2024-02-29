/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Heading";
import { GoChevronRight } from "react-icons/go";
import {
  about,
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_6,
  about2,
  about_Icon1,
  about_Icon2,
  about_Icon3,
} from "../assets";
function About() {
  return (
    <>
      <Heading
        text={"About Us"}
        h1={"About Us"}
        p={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some, by injected humour, or randomised words which don’t look even slightly believable."
        }
      />
      <div className=" container">
        <img src={about} alt="About" />
      </div>
      <div className="my-24">
        <div className="container flex  gap-4 items-center  justify-between flex-col lg:flex-row">
          <div className="flex-[.7]">
            <span className="text-xs font-normal tracking-widest text-neutral-500">
              XSTORE EST. 1950
            </span>
            <h1 className=" text-max_color my-8  font-medium text-4xl">
              Over 8 years of Experiance in
              <span className=" text-min_color">Online Selling.</span>
            </h1>
            <p className=" text-[#444] text-lg ">
              At vero eos et accusamus et iusto odio dignissimos ducimus
              blanditiis praesentium voluptatum delenitis corrupti quosloret
              quas moleti exceptur occaecat.
            </p>
          </div>
          <div className=" flex-1 2xl:mx-[10%] grid grid-cols-3 max-[500px]:grid-cols-2 gap-2 ">
            {[brand_1, brand_2, brand_3, brand_4, brand_5, brand_6].map(
              (e, index) => {
                return (
                  <img
                    key={index}
                    className="  mx-auto opacity-25 duration-[.4s] hover:opacity-100 cursor-pointer"
                    src={e}
                    alt={e}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="container flex  items-center flex-col lg:flex-row gap-10 lg:gap-0  ">
        <div className=" flex-1 w-full ">
          <img src={about2} className="w-full" alt="about" />
        </div>

        <div className="ml-0 lg:ml-[10%]  flex-1">
          <span className="text-xs font-normal tracking-widest text-neutral-500">
            KNOW ABOUT XSTORE
          </span>
          <h1 className=" text-max_color my-8  font-medium  text-4xl leading-[1.5]">
            Approximately <span className=" text-min_color">30K+ Products</span>{" "}
            <br />
            available on Xstore.
          </h1>
          <p className=" text-[#666] text-lg leading-[1.6] ">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment blinded by desire, that they cannot foresee
            the pain and trouble that are bound to ensuea equal blame belongs to
            weakness
          </p>
          <div className=" mt-10 lg:mt-20 flex gap-8 flex-col lg:flex-row">
            <div>
              <h1 className=" text-max_color  font-medium text-2xl mb-5  ">
                Our Mission
              </h1>
              <p className=" text-[#666] text-lg leading-[1.6] ">
                At vero eos et accusamus et iusto odio dignissimos ducimus
                quinditiis praesentium voluptatum.
              </p>
            </div>
            <div>
              <h1 className=" text-max_color  font-medium text-2xl  mb-5">
                Our Vission
              </h1>
              <p className=" text-[#666] text-lg leading-[1.6] ">
                But I must explain to you how this mistaken idea of denouncing
                leasure and praising pain was born.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container grid sm:grid-cols-3 gap-5  ">
          {[
            {
              img: about_Icon1,
              title: "Get your answer to frequently asked questions",
              link: "Learn More",
            },
            {
              img: about_Icon2,
              title: "Discover tips and inspiration for your product purchase",
              link: "Go To Blo",
            },
            {
              img: about_Icon3,
              title: "Get contact information address and email address",
              link: "Contact us",
            },
          ].map((e, index) => {
            return (
              <div
                className="rounded-2xl  border border-neutral-200 py-8 px-4 lg:px-16 text-center "
                key={index}
              >
                <img className="mx-auto" src={e.img} alt=" about_Icon" />
                <h2 className="my-5 text-[#666] text-lg leading-[1.6] ">
                  {e.title}
                </h2>
                <div className="flex items-center gap-1  font-medium cursor-pointer mx-auto text-min_color  duration-[.4s] hover:text-max_color  w-fit">
                  <span>{e.link}</span>
                  <GoChevronRight size={25} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
