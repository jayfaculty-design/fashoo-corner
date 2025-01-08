import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router";
import { NavContext } from "./App";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="h-full bg-white"
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

      {/* Start */}

      <div className="relative mt-16 gap-1 flex p-5">
        <NavLink className="underline lowercase underline-offset-4" to="/shop">
          Shop
        </NavLink>
        <p className="text-gray-500">/</p>
        <p className="lowercase">{product.title}</p>
      </div>

      <div className="bg-white p-5">
        {loading && (
          <div className="flex items-center justify-center relative mt-16">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        )}
        <div key={product.id} className="flex flex-col gap-3">
          <img
            className="w-[200px] self-center"
            src={product.image}
            alt={product.title}
          />
          <p className="text-neutral-500 border border-neutral-300 w-fit p-2">
            {product.category}
          </p>
          <p className="font-bold font-bodoni text-oranges">{product.title}</p>
          <p className="text-neutral-500">{product.description}</p>
          <p className="font-bold font-sans">${product.price}</p>
          <button className="uppercase border p-2 bg-black text-white relative mt-5">
            Add to cart
          </button>
          <button className="uppercase border border-black p-2 bg-neutral-100 flex items-center justify-center gap-3">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios/100/like--v1.png"
              alt="like--v1"
              className="cursor-pointer"
            />
            Add to favorites
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h1 className="font-medium tracking-wider text-[15px]">
            EDITOR'S NOTICE
          </h1>
          <p className="text-[14px]">
            This season, the Texan did what he does best: African wear (read:
            everyday fashion) imbued with fantasy and glamour.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <h1 className="font-medium tracking-wider text-[15px]">
            PRODUCT DETAILS
          </h1>
          {product.rating && (
            <ul className="text-[14px]">
              <li>Category: {product.category}</li>
              <li>Rating: {product.rating.rate}</li>
              <li>Count: {product.rating.count}</li>
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
