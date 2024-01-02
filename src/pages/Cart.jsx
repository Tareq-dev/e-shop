import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "./../components/Navbar";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;
    return total + discountedPrice;
  }, 0);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center">
          <div className=" w-2/5">
            <h2 className="text-xl font-semibold text-center">Your cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-2xl text-center text-sky-600 my-36">
                Cart is Empty
              </p>
            ) : (
              cartItems.map((item) => (
                <div>
                  <ul className="flex flex-col divide-y divide-gray-700">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                      <div className="flex w-full space-x-2 sm:space-x-4">
                        <img
                          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32"
                          src={item?.thumbnail}
                          alt="Polaroid camera"
                        />
                        <div className="flex flex-col justify-between w-full pb-4">
                          <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                              <h3 className="text-lg font-semibold leadi sm:pr-8">
                                {item?.title}
                              </h3>
                              <p className="text-sm ">Discount</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold">
                                ${item?.price}
                              </p>
                              <p className="text-sm text-red-500">
                                ${item?.discountPercentage}
                              </p>
                            </div>
                          </div>
                          <div className="flex text-sm divide-x">
                            <button
                              type="button"
                              className="flex items-center px-2 py-1 pl-0 space-x-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current"
                              >
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect
                                  width="32"
                                  height="200"
                                  x="168"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="240"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="312"
                                  y="216"
                                ></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                              </svg>
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <div className="space-y-1 text-right">
                <p>
                  Total amount:
                  <span className="font-semibold ml-4">
                    ${Math.floor(totalPrice)}
                  </span>
                </p>
                <p className="text-sm dark:text-gray-400">
                  Not including taxes and shipping costs
                </p>
              </div>
            )}
            <div className="flex justify-center space-x-4 mt-4">
              <Link
                to="/"
                className="px-6 py-2 border rounded-md dark:border-violet-400"
              >
                Back to shop
              </Link>
              {cartItems.length > 0 && (
                <button
                  type="button"
                  className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                >
                  Continue to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
