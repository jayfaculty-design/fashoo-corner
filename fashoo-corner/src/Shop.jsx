import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHeart,
  faHeartBroken,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, NavLink } from "react-router";
import Fashion from "./Fashion";
import Beauty from "./Beauty";
import Home2 from "./Home2";
function Shop() {
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

  const [searchBox, setSearchBox] = useState(false);
  const [searchCloseICon, setSearchCloseIcon] = useState(false);

  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [menuIconShow, setMenuIconShow] = useState(false);
  const [closeIconShow, setCloseIconShow] = useState(false);
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
              <div className="hidden lg:flex item-center gap-5 text-[14px]">
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
              <p className="font-semibold text-xl text-oranges relative">
                fashoo corner
              </p>
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
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios/100/like--v1.png"
                alt="like--v1"
                className="cursor-pointer"
              />
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/hieroglyphs/32/shopping-cart.png"
                alt="shopping-cart"
                className="cursor-pointer"
              />
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

          <div className="hidden top-bottom lg:flex justify-center items-center gap-5 relative mt-4 text-[14px] text-black">
            <a href="">New</a>
            <a href="">clothing</a>
            <a href="">jewelry</a>
            <a href="">accessories</a>
            <a href="">stylists</a>
            <a href="">shoes</a>
            <a href="">bags</a>
            <a href="">designers</a>
            <a href="">hot</a>
          </div>
        </div>
      </motion.div>

      <div
        className={`nav-menu-content ${
          mobileMenuShow ? "show" : ""
        } fixed inset-0 top-16 z-50 hidden`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="nav-menu absolute top-0 left-0 bg-white w-1/2 h-full shadow-xl overflow-y-auto">
          <div className="tabs flex items-center justify-between p-5 text-[14px] bg-neutral-100">
            <NavLink className="" to="fashion">
              FASHION
            </NavLink>
            <NavLink to="beauty">BEAUTY</NavLink>
            <NavLink to="home">HOME</NavLink>
          </div>

          <Outlet />
        </div>
      </div>

      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-64 overflow-hidden rounded-lg md:h-96 mt-16">
          {/* Item 1 */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src="/model2.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Slide 1"
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
      </div>

      <div className="new-panel border-b flex flex-col items-center justify-center gap-10 text-black p-14 pb-5">
        <div className="new-panel-top flex flex-col gap-10">
          <div className="text-center flex gap-3 flex-col ">
            <p className="text-4xl lowercase">WHAT'S NEW</p>
            <button className="lowercase border-b border-black w-fit self-center">
              Shop now
            </button>
          </div>
          <div className="text-center flex gap-3 flex-col">
            <p className="text-4xl lowercase">WHAT'S NEXT</p>
            <button className="lowercase border-b border-black w-fit self-center">
              Shop shoes
            </button>
          </div>
        </div>

        <div className="new-panel-down relative mt-5">
          <p className="">THE LATEST LIST</p>
        </div>
      </div>
      {/* some section */}
      <div className="some-section">
        <div className="section-1 relative mt-3 border border-t-neutral-400 border-b-neutral-400 p-3">
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img src="girl.png" className="h-full" />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Erderm Pre Fall 25: Paintly Pronts</p>
              </div>
              <div>
                <button className="lowercase border-b border-black w-fit">
                  Shop pants
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 relative mt-3 border border-t-neutral-400 border-b-neutral-400 p-3">
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img src="girl.png" className="h-full" />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Erderm Pre Fall 25: Paintly Pronts</p>
              </div>
              <div>
                <button className="lowercase border-b border-black w-fit">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.2,
            width: "70%",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            width: "100%",
            transition: {
              duration: 1,
            },
          }}
          viewport={{
            once: true,
          }}
          className="section-3 relative mt-3 border border-t-neutral-400 p-3"
        >
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img src="girl.png" className="h-full" />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Trending Now: Citrus Hues, Spectacles & More</p>
              </div>
              <div>
                <button className="lowercase border-b border-black w-fit">
                  Shop pants
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* faculty closet */}
      <div className="p-5 relative mt-5">
        <p className="closet-heading before:bg-neutral-400 after:bg-neutral-400 text-center text-2xl lowercase font-semibold text-oranges">
          FACULTY CLOSET
        </p>
      </div>
    </motion.div>
  );
}

export default Shop;
