import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { NavContext } from "./App";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Shopmenu() {
  const {
    mobileMenuShow,
    setMobileMenuShow,
    setMenuIconShow,
    setCloseIconShow,
  } = useContext(NavContext);
  const handleMenuClose = () => {
    setMobileMenuShow(false);
    setMenuIconShow(false);
    setCloseIconShow(false);
  };
  return (
    <div
      className={`nav-menu-content ${
        mobileMenuShow ? "show" : ""
      } fixed inset-0 top-16 z-50 hidden`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="nav-menu absolute top-0 left-0 bg-white w-[70%] h-full shadow-xl overflow-y-auto">
        <div className="flex flex-col p-4 mt-3 text-[14px] gap-4 font-medium lowercase">
          <div>
            <NavLink
              onClick={handleMenuClose}
              to="/shop/clothing"
              className="border-b-neutral-200 border-b pb-3 cursor-pointer flex justify-between"
            >
              <p>Clothing</p>
              <p className="font-extralight text-[15px]">{">"}</p>
            </NavLink>
            <NavLink
              to="/shop/shoes"
              onClick={handleMenuClose}
              className="border-b-neutral-200 border-b pb-3 pt-3 cursor-pointer flex justify-between"
            >
              <p>Shoes</p>
              <p className="font-extralight text-[15px]">{">"}</p>
            </NavLink>
          </div>

          <div className="relative mt-1 flex flex-col gap-5 border-b border-neutral-300 pb-5">
            <NavLink
              to="/shop/jelweries"
              className="cursor-pointer flex items-center justify-between"
              onClick={handleMenuClose}
            >
              <p>Jelweries</p>
              <p className="font-extralight text-[15px]">{">"}</p>
            </NavLink>
            <NavLink
              to="/shop/beyond-fashion"
              className="cursor-pointer flex items-center justify-between"
              onClick={handleMenuClose}
            >
              <p>Beyond Fashion</p>
              <p className="font-extralight text-[15px]">{">"}</p>
            </NavLink>
          </div>

          <div className="flex flex-col gap-5 border-b-neutral-300 border-b pb-5">
            <h1>Featured</h1>
            <NavLink
              onClick={handleMenuClose}
              to="/shop/clothing"
              className="flex flex-col gap-4"
            >
              <img
                src="https://img.freepik.com/free-photo/portrait-fashionable-boy-posing_23-2148184645.jpg?t=st=1736096751~exp=1736100351~hmac=5c861bc7dcc6e44a811b1561a425a13a40b7aba53027a409ef3b2c4a5c08e57d&w=360"
                alt=""
              />
              <p>faculty closet</p>
            </NavLink>
          </div>

          <div className="flex flex-col gap-5 mt-3">
            <NavLink onClick={handleMenuClose} to="/shop/cart">
              Your Bag
            </NavLink>
            <NavLink onClick={handleMenuClose} to="shop/favorites">
              my favourites
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopmenu;
