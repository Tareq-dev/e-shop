import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar() {
  const profileImage = localStorage.getItem("image");

  const { cartItems } = useCart();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((total, item) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;
    return total + discountedPrice;
  }, 0);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("image");
    navigate("/login");
    toast.success("Logout Successfully");
  };

  return (
    <div className="container rounded-b-md sticky top-0 mx-auto z-10 py-2 px-2 md:px-20 bg-black text-white">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold"
        >
          E-Shop
        </Link>
        <ul className="md:flex gap-6 items-center hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="#products">About</Link>
          </li>
        </ul>
        <div className="">
          <div className="flex items-center gap-8">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-warning badge-sm indicator-item">
                    {cartItems?.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-gray-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-black text-lg">
                    {cartItems?.length} Items
                  </span>
                  <span className="text-info">
                    Subtotal: ${Math.floor(totalPrice)}
                  </span>
                  <div className="card-actions">
                    <Link
                      to="/cart"
                      className="bg-sky-500 px-2 rounded-md text-white py-1"
                    >
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="bg-gray-200"
                    alt="Tailwind CSS Navbar component"
                    src={profileImage}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-40 text-black"
              >
                <li>
                  <button
                    className="py-2"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
