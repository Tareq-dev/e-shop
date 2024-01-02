import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("image", data.image);
          setFormData({
            username: "",
            password: "",
          });
          toast.success("Welcome to Home Page");
          navigate(redirectPath, { replace: true });
        }
      });
  };
  return (
    <div className="flex items-center justify-center h-screen mx-3">
      <div className="bg-gray-100 p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="bg-sky-500 text-white px-4 py-1 rounded-md hover:bg-sky-600 focus:outline-none focus:ring focus:border-sky-300"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div>
            <p>User Name - kminchelle</p>
            <p>Password - 0lelplR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
