/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Heading";
import { contact_Icon1, contact_Icon2, contact_Icon3, Map } from "../assets";
function Contact() {
  return (
    <>
      <Heading text={"Contact Us"} h1={"Contact Us"} />

      <div className="mb-14">
        <div className="container grid sm:grid-cols-3 gap-5  ">
          {[
            {
              img: contact_Icon1,
              title:
                "121 King Street, Melbourne West PO Box Victoria 3000 Australia",
              link: "Phone: +61 3 8376 6284",
            },
            {
              img: contact_Icon2,
              title:
                "Slowly she drifted to the southeast, rising higher & higher as the flame",
              link: "information@8themes.net",
            },
            {
              img: contact_Icon3,
              title:
                "Ascending to the roof of the building I watched her for hours, until.",
              link: "Fax: +1 909969 0383",
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

                <span className="font-medium cursor-pointer  text-min_color  duration-[.4s] hover:text-max_color ">
                  {e.link}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <img src={Map} alt="Map" />
        <form className="my-32 text-center  lg:mx-[25%]">
          <h1 className=" text-max_color  text-[40px] max-[450px]:text-3xl  font-medium mb-5">
            Get in Touch with Us
          </h1>
          <div className="flex justify-center items-center gap-4 max-[450px]:flex-col">
            <input
              className="py-2 px-5 outline-none bg-[#f6f6f6] rounded-3xl  w-full"
              type="text"
              placeholder=" Name"
              name="name"
              required
            />
            <input
              className="py-2 px-5 outline-none bg-[#f6f6f6] rounded-3xl  w-full"
              type="email"
              placeholder=" E-mail"
              name="email"
              required
            />
          </div>

          <textarea
            className="py-2 px-5 outline-none bg-[#f6f6f6] rounded-3xl my-4  w-full"
            placeholder="Write Your Message"
            name="msg"
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="py-2 px-7 bg-min_color cursor-pointer duration-[0.4s] hover:bg-max_color rounded-full text-white text-lg font-medium  w-full"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </>
  );
}

export default Contact;
