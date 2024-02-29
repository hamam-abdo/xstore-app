/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import {
  Icon_0,
  Icon_1,
  Icon_2,
  Icon_3,
  footer_logo,
  Payment,
} from "../assets";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { LiaTelegramPlane } from "react-icons/lia";
function Footer() {
  return (
    <footer className="bg-[#32373c] ">
      <div className=" container  ">
        <div className="grid-cols-footer pb-7 pt-8  gap-2 gap-y-8 lg:grid-cols-footer2 2xl:grid-cols-footer grid  justify-between   border-b border-[#464d54]   ">
          {[
            {
              head_title: "Free Shipping Order $60",
              min_title: "Delivery Moves So Quickly",
              img: Icon_0,
            },
            {
              head_title: "Easy & Fast Returns",
              min_title: "30 Days Free Return Polic",
              img: Icon_1,
            },
            {
              head_title: "24/7 Customer Support",
              min_title: "Online Help By Our Agents",
              img: Icon_2,
            },
            {
              head_title: "100% Secure Payments",
              min_title: "PayPal / MasterCard / Visa",
              img: Icon_3,
            },
          ].map((e, index) => {
            return (
              <div className="flex items-center  gap-5 " key={index}>
                <img src={e.img} className=" max-w-12 xl:max-w-14" alt="icon" />
                <div>
                  <h1 className=" text-white  lg:text-sm xl:text-lg font-medium mb-2">
                    {e.head_title}
                  </h1>
                  <p className=" text-[#aaa] text-sm xl:text-base">
                    {e.min_title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex mt-12  flex-col lg:flex-row pb-16 border-b border-[#464d54] justify-between">
          <div className=" flex justify-between  flex-1  flex-row  gap-6   max-[500px]:flex-col  pb-10 lg:pr-20  lg:pb-0 ">
            {[
              {
                title: "COMPANY",
                link: ["About Us", "Careers", "Affiliates", "Blog"],
              },
              {
                title: "SHOP",
                link: ["Appliances", "Gedgets", "Wearables", "Shop All"],
              },
              {
                title: "SUPPORT",
                link: [
                  "Contact Us",
                  "Returns",
                  "Frequently Asked Questions",
                  "Privacy",
                ],
              },
            ].map((e, index) => {
              return (
                <ul key={index}>
                  <h1 className="text-[#888] mb-3 font-bold">{e.title}</h1>
                  {e.link.map((e, index) => {
                    return (
                      <li key={index}>
                        <a
                          href="#"
                          className=" relative  text-white block mt-2  text-sm pb-1 w-fit duration-[.3s]  hover:text-min_color  after:absolute after:content-[''] after:h-[2px]  after:w-0 after:bg-min_color after:bottom-0  after:right-0 after:left-auto  after:duration-[.3s]  hover:after:left-0 hover:after:right-auto hover:after:w-full  "
                        >
                          {e}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className="flex-[0.8]  border-t lg:border-l lg:border-t-0  border-[#464d54] pt-10 lg:pl-20 lg:pt-0 xl:pl-44">
            <h1 className="text-[#888] mb-3 font-bold">SUBSCRIBE</h1>
            <p className=" text-white  text-[15px] ">
              Enter your email address to get{" "}
              <span className=" font-bold  underline  cursor-pointer  duration-[.4s]  hover:text-min_color ">
                $20 off your first order
              </span>
            </p>
            <div className="flex my-5 gap-2 items-center">
              <input
                className=" rounded-[100px] px-7 h-9 outline-none	f flex-auto "
                type="email"
                name="email"
                placeholder="Your E-mail Address"
                required
              />
              <input
                className="py-2 px-4 bg-min_color rounded-full w-36 text-white font-medium cursor-pointer duration-[0.4s] hover:opacity-80"
                type="submit"
                value={"Send"}
              />
            </div>
            <div className="flex gap-3">
              {[
                <FaFacebookF size={20} />,
                <FaXTwitter size={20} />,
                <FaInstagram size={20} />,
                <TfiYoutube size={20} />,
                <LiaTelegramPlane size={20} />,
              ].map((e, index) => {
                return (
                  <div
                    key={index}
                    className=" text-[#999999] duration-[.4s] cursor-pointer  hover:text-min_color"
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-10 flex   flex-col sm:flex-row gap-5  justify-around lg:justify-between items-center">
          <img src={footer_logo} alt="footer_logo" />
          <p className="  hidden lg:block text-[#ccc]">
            Copyright © 2024{" "}
            <span className=" text-white  font-semibold duration-[.4s] cursor-pointer  hover:text-min_color ">
              {" "}
              XStore
            </span>{" "}
            Created by –{" "}
            <a
              className=" text-white  font-semibold duration-[.4s]   hover:text-min_color"
              href="https://www.facebook.com/profile.php?id=100076514415204"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hady Abdul Rahman
            </a>
          </p>
          <img src={Payment} alt="Payment" />
        </div>
        <div className="flex  gap-1 lg:hidden   justify-center pb-20 md:pb-2  max-[500px]:flex-col text-center  text-[#ccc]">
          <p>
            Copyright © 2024
            <span className=" text-white font-semibold duration-[.4s] cursor-pointer  hover:text-min_color">
              {" "}
              XStore
            </span>
          </p>
          <p>
            Created by –{" "}
            <a
              className=" text-white font-semibold duration-[.4s]  hover:text-min_color"
              href="https://www.facebook.com/profile.php?id=100076514415204"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hady Abdul Rahman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
