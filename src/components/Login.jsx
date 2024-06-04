/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { toogel, login } from "../store/toogel";
function Login() {
  const [acconut, setdata] = useState({});
  const inputthand = (e) => {
    const key = e.target.name || e.target.id;
    const value = e.target.value;
    setdata((prevData) => ({ ...prevData, [key]: value }));
  };

  const [registrationStatus, setRegistrationStatus] = useState(null);
  const Dispatch = useDispatch();
  const onSubmithand = (e) => {
    e.preventDefault();
    Axios.get(`https://logn.onrender.com/logn`).then((response) => {
      const emailExists = response.data.some(
        (user) =>
          user.email === acconut.email && user.password === acconut.password
      );
      if (emailExists) {
        localStorage.setItem("loggedInEmail", acconut.email);
        Dispatch(toogel());
        Dispatch(login()); //
      } else setRegistrationStatus("Please check your username or password");
    });
  };

  return (
    <>
      <form
        onSubmit={onSubmithand}
        className=" mt-8 flex gap-4 flex-col text-left"
      >
        <label htmlFor="email">Username or email *</label>
        <input
          id="email"
          type="email"
          required
          onChange={inputthand}
          className="  py-1.5 px-4  outline-0  border  border-slate-300  focus:border-black  bg-white  "
        />
        <label htmlFor="password">Password *</label>
        <input
          id="password"
          type="password"
          required
          onChange={inputthand}
          className="  py-1.5 px-4 outline-0  border  border-slate-300   focus:border-black  bg-white  "
        />
        <button
          type="submit"
          className="  py-3 px-7 mt-5 bg-min_color  duration-[0.4s] hover:bg-max_color rounded-full text-white font-medium "
        >
          Login
        </button>
        <div className="mt-5 text-center  text-red-600">
          {registrationStatus}
        </div>
      </form>
    </>
  );
}

export default Login;
