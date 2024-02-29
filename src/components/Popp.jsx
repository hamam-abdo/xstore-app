/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { TfiClose } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";
import { toogel } from "../store/toogel";

function Popp({ children }) {
  const Dispatch = useDispatch();
  const toogle = useSelector((state) => state.toogle);

  const [close, setclose] = useState("");

  const handleClick = () => {
    setclose("animate-[close_.9s]");
    const timeout = setTimeout(() => {
      Dispatch(toogel());
      setclose("");
    }, 400);

    return () => clearTimeout(timeout); // Cleanup function
  };
  return (
    <>
      {toogle.Popp &&
        createPortal(
          <>
            <div className=" fixed bg-[rgba(24,24,24,.3)] z-[100]  bottom-0 right-0 left-0 top-0  "></div>

            <div
              className={`${close}  p-7 fixed bg-white w-[300px] sm:w-[400px] z-[110] top-0  right-0   animate-[Popp_.8s] h-full`}
            >
              <div
                onClick={() => handleClick()}
                className="flex  cursor-pointer items-center justify-center w-10 h-10 bg-white rounded-full  absolute -left-14 top-4"
              >
                <TfiClose />
              </div>

              {children}
            </div>
          </>,
          document.getElementById("modal")
        )}
    </>
  );
}

export default Popp;
