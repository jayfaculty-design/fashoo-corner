import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { NavContext } from "./App";

function Shopmenu() {
  const { mobileMenuShow } = useContext(NavContext);
  return (
    <div
      className={`nav-menu-content ${
        mobileMenuShow ? "show" : ""
      } fixed inset-0 top-16 z-50 hidden`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="nav-menu absolute top-0 left-0 bg-white w-[70%] h-full shadow-xl overflow-y-auto">
        <div className="tabs flex items-center justify-around p-5 text-[14px] bg-neutral-100">
          <NavLink className="" to="shop/shop-menu/fashion">
            MEN
          </NavLink>
          <NavLink to="shop/shop-menu/beauty">WOMEN</NavLink>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Shopmenu;
