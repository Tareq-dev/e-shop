import React from "react";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Card({ item }) {
  const { addToCart } = useCart();
  return (
    <div className="h-[340px] shadow-xl my-2 rounded">
      <div className="relative flex justify-center">
        <img
          src={item.thumbnail}
          alt="product"
          className="h-[180px]"
        />
        <span className="absolute top-3 left-1 bg-red-500 text-white text-sm shadow px-2 rounded-md">
          -{Math.floor(item.discountPercentage)}%
        </span>
      </div>
      <div className="p-2">
        <h4 className="text-xl font-semibold">{item.title.slice(0, 20)}</h4>
        <div className="flex justify-between px-2 py-4">
          <h2 className="font-bold text-2xl">${item.price}</h2>
          <div className="flex justify-center items-center">
            <FaStar className="text-orange-400 mr-1" />
            <h4>{item.rating}</h4>
          </div>
        </div>
        <div>
          <button
            onClick={() => addToCart(item)}
            className="text-md rounded-md mt-2 px-2 py-1 font-semibold bg-sky-500 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
