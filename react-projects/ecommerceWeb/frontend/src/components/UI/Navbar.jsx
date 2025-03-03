import React from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="Navbar flex justify-around items-center">
        <div className="img flex justify-center items-center">
          <img className="size-10 mx-2" src={logo} alt="" />
          <h3 className="flex">SHOPPER</h3>
        </div>
        <div className="menu [&>*]:flex p-5 [&>*]:gap-5">
          <ul>
            <li className="nav">
              <NavLink to="/">Shop</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/mens">Men</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/womens">Women</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/kids">Kids</NavLink>
            </li>
          </ul>
        </div>
        <div className="login-cart p-5 flex">
          <NavLink to="/login">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300  hover:bg-gray-100 font-small rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Login
            </button>
          </NavLink>

          <div className="counter-icon">
            <NavLink to="/cart">
              <img src={cart_icon} alt="" />
            </NavLink>

            <div className="nav-cart-count flex items-center justify-center -mt-13 size-5 ml-9 bg-red-500 text-white rounded-3xl">
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
