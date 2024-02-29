/* eslint-disable react/prop-types */
import { useRef } from "react";

const Testing = ({ img }) => {
  const container = useRef(null);
  const center = "center"; // Assuming you have defined center somewhere

  const handleMouseMove = (e) => {
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      document.querySelector(".maaaain").style.transformOrigin = center;
      document.querySelector(".maaaain").style.transform = "scale(1)";
    } else {
      let react = container.current.getBoundingClientRect();
      const x = e.clientX - react.left;
      const y = e.clientY - react.top;
      document.querySelector(
        ".maaaain"
      ).style.transformOrigin = `${x}px ${y}px`;
      document.querySelector(".maaaain").style.transform = "scale(2)";
    }
  };

  const handleMouseLeave = () => {
    document.querySelector(".maaaain").style.transformOrigin = center;
    document.querySelector(".maaaain").style.transform = "scale(1)";
  };

  return (
    <div
      className="overflow-hidden  p-4"
      ref={container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={img}
        className="maaaain w-full h-full cursor-zoom-in"
        style={{ transformOrigin: "center", objectFit: "cover" }}
        alt="img"
      />
    </div>
  );
};

export default Testing;
