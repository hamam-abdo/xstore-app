/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { Logo, Seva, cart_i, Accunt } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { toogel, Type, Or, login } from "../store/toogel";

function Navbar() {
  const Dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const logins = useSelector((state) => state.toogle.login);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.prices * product.quantity;
    return acc;
  }, 0);

  const [fixed, setfixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setfixed(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = navLinks.map((link, index) => {
    return (
      <li key={link.id}>
        <NavLink
          to={link.id}
          className="p-3 font-medium duration-[0.4s] text-max_color hover:text-min_color "
        >
          {link.title}
        </NavLink>
      </li>
    );
  });

  return (
    <header
      className={`${
        fixed ? "fixed shadow-nav   animate-[hedar_1s]" : ""
      } w-full top-0  z-50 bg-white `}
    >
      <nav className=" flex items-center justify-between py-5 container ">
        <img src={Logo} alt="Logo" className=" w-[115px]" />
        <ul className="  hidden md:flex">{Links}</ul>
        <ul className=" flex items-center gap-2 lg:gap-3">
          <li>
            <a className="relative">
              <span className=" absolute text-xs -top-1 z-10 -right-2  w-4 h-4 rounded-full bg-[#e1e1e1] flex items-center justify-center">
                {wishlist.length}
              </span>
              <img
                onClick={() => {
                  Dispatch(toogel()),
                    Dispatch(Type("Cart")),
                    Dispatch(Or("Seva"));
                }}
                src={Seva}
                alt="Seva"
                className="   w-5 duration-[0.4s] hover:opacity-70  cursor-pointer"
              />
            </a>
          </li>
          <li>
            <div className="flex gap-1 font-medium">
              <img
                onClick={() => {
                  if (localStorage.loggedInEmail) {
                    Dispatch(login());
                    localStorage.removeItem("loggedInEmail");
                  } else {
                    Dispatch(toogel());
                    Dispatch(Type("Accunt"));
                  }
                }}
                src={Accunt}
                alt="Accunt"
                className="w-5 duration-[0.4s] hover:opacity-70 cursor-pointer"
              />
              <span className="hidden md:block text-sm">
                {localStorage.loggedInEmail ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </li>
          <li>
            <a
              onClick={() => {
                Dispatch(toogel()),
                  Dispatch(Type("Cart")),
                  Dispatch(Or("Cart"));
              }}
              className="flex gap-2 py-2 px-4 bg-min_color rounded-full text-white font-medium cursor-pointer duration-[0.4s] hover:opacity-70"
            >
              <img src={cart_i} alt="cart" className="w-5 " />
              <span> Cart ${totalPrice}.00</span>
            </a>
          </li>
        </ul>
      </nav>
      <ul className="flex md:hidden justify-evenly items-center bg-min_color  h-16 fixed w-full bottom-0 z-[100]">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.id}
              className="text-white duration-[0.4s] hover:opacity-70"
            >
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
