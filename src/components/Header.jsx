import React from "react";
import phoneImage from "../assets/mobile.png";
function Header() {
  return (
    <div className="container rounded-md mx-auto md:flex items-center gap-4 bg-gray-100 my-4">
      <div className="py-10 md:py-20 pl-5 md:pl-20 md:w-1/2">
        <h5 className="text-gray-600">Get up to 75% off Today Only!</h5>
        <h1 className="text-4xl md:text-6xl py-5 font-bold ">
          Best Mobile Phone
        </h1>
        <p className="text-3xl text-orange-600 mt-3">
          $470.00
          <span className="line-through text-black text-2xl px-3">$500</span>
        </p>
        <button className="text-sm md:text-xl px-2 py-1 mt-8 rounded-md font-semibold bg-sky-500 text-white">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2 p-10">
        <img
          className="-mt-32 md:mt-0"
          src={phoneImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
