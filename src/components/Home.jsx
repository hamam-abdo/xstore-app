/* eslint-disable no-unused-vars */
import React from "react";
import Linding_home from "./Home/Linding_home";
import HubItems from "./Home/HubItems";
import Elementor from "./Home/Elementor";
import { Maxitems, articals } from "../constants";
import Trending from "./Home/Trending";
import Control from "./Home/Control";
import { Voice, Home_Gedget } from "../assets";
import Testimonials from "./Home/Testimonials";
import Articals from "./Home/Articals";
import Brand from "./Home/Brand";

export default function Home() {
  return (
    <>
      <Linding_home />
      <HubItems Items={Maxitems} />
      <Elementor />
      <Trending />
      <div className="  container flex gap-6 md:flex-row flex-col ">
        <Control
          img={Voice}
          HeadTitle={"NEW WEARABLE GADGET"}
          MinTitle={"Smart Watch-Z2 Pro with Voice Controls"}
          Button={"Purchase Now"}
        />
        <Control
          img={Home_Gedget}
          HeadTitle={"FREE SHIPPING AVAILABLE"}
          MinTitle={"Smart Home Gedget with 50% Discount"}
          Button={"See Collection"}
        />
      </div>
      <Testimonials />
      <Articals Items={articals} />
      <Brand />
    </>
  );
}
