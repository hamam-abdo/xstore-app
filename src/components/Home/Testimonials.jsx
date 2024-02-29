/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { GoArrowLeft, GoArrowRight, GoChevronRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials, Avatar_1, Avatar_2 } from "../../assets";
import { Tilt } from "react-tilt";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Testimonials() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    scale: 1,
    perspective: 700, // Transform perspective, the lower the more extreme the tilt gets.
    speed: 400, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const Next = useRef(null);
  const Prev = useRef(null);
  return (
    <div
      style={{
        backgroundImage: `url("${testimonials}")`,
      }}
      className="container flex my-16 flex-col gap-20 lg:gap-0 lg:flex-row xl:px-14 pb-10"
    >
      <div className=" flex-1 lg:mx-14 xl:pt-7 2xl:pt-14">
        <span className="text-xs font-normal tracking-widest text-neutral-500">
          CLIENT’S TESTIMONIALS
        </span>
        <h1 className="leading-[1.3] text-3xl 2xl:text-[45px] text-max_color font-medium mt-4 relative before:absolute before:contents-[''] before:bg-min_color before:w-1/4 before:h-1 before:rounded-md before:bottom-[-20px]">
          5K+ Satisfied Customers Let’s Look Reviews
        </h1>
        <p className="text-sm xl:text-[18px] text-neutral-500 font-normal mb-5 mt-10 leading-8 max-w-[550px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy
          eirmod tempor invidunt ut labore rem ipsum dolor sit amet, consetetur
          sadipscing elitr.
        </p>

        <Link
          to={"/Shop"}
          className=" flex  items-center  text-min_color  group duration-[.4s] hover:text-max_color font-medium "
        >
          View All Products
          <GoChevronRight
            size={18}
            className=" group-hover:animate-[ml_0.3s_ease-in-out]  ml-1 "
          />
        </Link>
      </div>

      <Swiper
        className="flex-1  mx-0  md:mx-20 "
        // install Swiper modules
        modules={[Navigation]}
        slidesPerView={1}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = Prev.current;
          swiper.params.navigation.nextEl = Next.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop
      >
        {[
          {
            id: 1,
            Description:
              "As always a 5 star! i bought this theme the third or fourth time so far... really loving it. the new update from 6.0 is awesome",
            head_title: "Harold Nguyen",
            min_title: "Syrian Arab Republic",
            img: Avatar_1,
          },
          {
            id: 2,
            Description:
              "This is by far the best theme on Themeforest. It adapts to a lot of the plugins, and their customer support is great. I really love this theme! Thanks 8theme.",
            head_title: "Judith Mckinney",
            min_title: "Seychellesc",
            img: Avatar_2,
          },
        ].map((e) => {
          return (
            <SwiperSlide key={e.id} className="h-fit">
              <Tilt
                options={defaultOptions}
                className="  rounded-2xl  border   flex-col  text-center sm:text-start sm:flex-row  bg-white z-30 border-neutral-300 p-5  m-6  lg:m-2  xl:m-6  mb-20 lg:mb-0 h-full  flex  items-start gap-10 "
              >
                <img className="mx-auto" src={e.img} alt="Avatar" />
                <div>
                  <p className="  text-sm leading-6 lg:!leading-5  lg:text-[12px] xl:text-sm font-normal xl:!leading-6 text-neutral-500">
                    {e.Description}
                  </p>
                  <div className="flex  my-3 justify-center sm:justify-start">
                    <IoIosStar color="#fdd835" size={20} />
                    <IoIosStar color="#fdd835" size={20} />
                    <IoIosStar color="#fdd835" size={20} />
                    <IoIosStar color="#fdd835" size={20} />
                    <IoIosStar color="#fdd835" size={20} />
                  </div>
                  <h1 className=" text-black text-[16px]  font-medium uppercase">
                    {e.head_title}
                  </h1>
                  <span className=" text-neutral-500 text-[16px]   ">
                    {e.min_title}
                  </span>
                </div>
              </Tilt>
            </SwiperSlide>
          );
        })}

        <button
          ref={Prev}
          className=" absolute bottom-0 lg:-bottom-7      2xl:bottom-20 z-50 left-[30%]  2xl:left-[40%] group   duration-[0.5s] translate-y-[-50%]   bg-white w-12 h-12 flex items-center justify-center rounded-full  border   border-neutral-300  hover:border-min_color   "
        >
          <GoArrowLeft
            size={20}
            className=" duration-[0.5s] group-hover:text-min_color"
          />
        </button>
        <button
          ref={Next}
          className=" absolute  bottom-0  lg:-bottom-7  2xl:bottom-20 z-50 right-[30%] 2xl:right-[40%]   group duration-[0.5s] translate-y-[-50%]  bg-white w-12 h-12 flex items-center justify-center rounded-full  border border-neutral-300  hover:border-min_color "
        >
          <GoArrowRight
            size={20}
            className=" duration-[0.5s] group-hover:text-min_color"
          />
        </button>
      </Swiper>
    </div>
  );
}

export default Testimonials;
