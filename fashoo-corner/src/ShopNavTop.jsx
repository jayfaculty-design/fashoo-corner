import React, { useContext, useEffect, useState } from "react";
import { NavContext } from "./App";
import { motion } from "framer-motion";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import { CartContext } from "./CartProvider";

function ShopNavTop() {
  const {
    closeIconShow,
    setCloseIconShow,
    searchCloseICon,
    setSearchCloseIcon,
    menuIconShow,
    setMenuIconShow,
    searchBox,
    setSearchBox,
    setMobileMenuShow,
  } = useContext(NavContext);

  const { count, setCount, cartItems } = useContext(CartContext);
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    setCount(cartItems.length);
  }, [cartItems]);
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="h-full"
    >
      <motion.div className="relative">
        <div className="top-bar z-[999] fixed top-0 w-full  p-5 lg:pr-10 lg:pl-10 bg-white shadow-md">
          <div className="top-top flex justify-between items-center lg:border-b lg:pb-5">
            <div className="gap-5 flex">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios/50/delete-sign.png"
                alt="delete-sign"
                className={`close-icon ${
                  closeIconShow ? "show" : ""
                } lg:hidden hidden cursor-pointer`}
                onClick={() => {
                  setMobileMenuShow(false);
                  setCloseIconShow(false);
                  setMenuIconShow(false);
                }}
              />
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios/50/menu--v1.png"
                alt="menu--v1"
                className={`menu-btn ${
                  menuIconShow ? "hidden" : ""
                } cursor-pointer lg:hidden`}
                onClick={() => {
                  setMobileMenuShow(true);
                  setCloseIconShow(true);
                  setMenuIconShow(true);
                }}
              />
              <div className="hidden lg:flex item-center gap-5 text-[14px] font-sans">
                <Link
                  to="fashion"
                  className=" text-oranges font-semibold lowercase hover:text-oranges"
                >
                  fashion
                </Link>
                <Link
                  className="text-black font-semibold lowercase hover:text-indigo-600 transition-all ease-in-out"
                  to="beauty"
                >
                  beauty
                </Link>
                <Link
                  className="text-black font-semibold lowercase hover:text-indigo-600 transition-all ease-in-out"
                  to="home"
                >
                  home
                </Link>
              </div>
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
                alt="search--v1"
                className={`search-open ${
                  searchCloseICon ? "hide" : ""
                } cursor-pointer lg:hidden`}
                onClick={() => {
                  setSearchBox(true);
                  setSearchCloseIcon(true);
                }}
              />
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
                alt="search--v1"
                className={`search-close ${
                  searchCloseICon ? "show" : ""
                } cursor-pointer lg:hidden hidden`}
                onClick={() => {
                  setSearchBox(false);
                  setSearchCloseIcon(false);
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <NavLink to="/shop">
                <p className="font-semibold lg:text-2xl lg:left-12 text-oranges relative">
                  fashoo corner
                </p>
              </NavLink>
            </div>

            <div className="gap-5 flex items-center">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
                alt="search--v1"
                className="cursor-pointer hidden lg:flex relative left-5"
              />
              <input
                type="search"
                placeholder="Search"
                className="border-none outline-none hidden lg:flex placeholder:text-[14px] text-[14px] text-black"
              />
              <NavLink to="/shop/favorites">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios/100/like--v1.png"
                  alt="like--v1"
                  className="cursor-pointer"
                />
              </NavLink>

              <NavLink to="/shop/cart" className="flex items-center">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/hieroglyphs/32/shopping-cart.png"
                  alt="shopping-cart"
                  className="cursor-pointer"
                />
                <div className="count bg-oranges font-forum text-white p-1 h-5 w-5 rounded-full flex items-center justify-center">
                  <p>{count}</p>
                </div>
              </NavLink>
            </div>
          </div>

          <div
            className={`search-box-mb ${
              searchBox ? "show" : ""
            } top-center hidden items-center mt-3 lg:hidden`}
          >
            <FontAwesomeIcon
              className="font-light text-neutral-600 absolute ml-3 "
              icon={faSearch}
            />
            <input
              type="text"
              className="w-full pl-10 bg-neutral-100"
              placeholder="what are you looking for?"
            />
          </div>

          <div className="hidden top-bottom lg:flex justify-center items-center gap-10 relative mt-4 text-[14px] text-black">
            <NavLink className={`lowercase`} to="/shop">
              Home
            </NavLink>
            <NavLink className="lowercase" to="/shop/clothing">
              New
            </NavLink>
            <NavLink className="lowercase" to="/shop/clothing">
              clothing
            </NavLink>
            <NavLink className="lowercase" to="/shop/jelweries">
              jelweries
            </NavLink>
            <NavLink className="lowercase" to="/shop/shoes">
              shoes
            </NavLink>
            <NavLink className="lowercase" to="/shop/beyond-fashion">
              beyond fashion
            </NavLink>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ShopNavTop;
