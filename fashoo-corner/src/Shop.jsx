import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { motion, time } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faHeart,
  faHeartBroken,
  faSearch,
  faTimes,
  faGreaterThan,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, NavLink } from "react-router";
import Fashion from "./Fashion";
import Beauty from "./Beauty";
import Home2 from "./Home2";
import Slider from "react-slick";
import axios from "axios";
import { NavContext } from "./App";
import Footer from "./Footer";

function Shop() {
  var productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ],
  };
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

  const [menuIconShow, setMenuIconShow] = useState(false);
  const [closeIconShow, setCloseIconShow] = useState(false);

  const {
    setMobileMenuShow,
    products,
    loading,
    menClothing,
    errorMessage,
    fetchProducts,
  } = useContext(NavContext);

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

      {/* Carousel */}
      <Slider className="mt-16" {...settings}>
        <div className="h-80">
          <img src="/model1.jpg" alt="" />
        </div>
        <div className="h-80">
          <img src="/model2.jpg" alt="" />
        </div>
        <div>
          <div className="bg-blue-900 flex flex-col text-white items-center justify-center gap-4 p-10 h-80">
            <h1 className="text-white">THE DESIGNER SALE</h1>
            <h1 className="text-5xl text-center">
              <span className="text-yellow-300">UP TO</span> <br /> 70% OFF
            </h1>
            <p className="text-center text-[12px] font-light">
              Our designer sale even got better <br /> Dresses, faculty
              collection <br /> and more are now up to 70% off
            </p>
            <button className="border-b">shop sale</button>
          </div>
        </div>
      </Slider>

      {/* End Carousel */}

      <div className="new-panel border-b flex flex-col items-center justify-center gap-10 text-black p-14 pb-5 font-bodoni">
        <div className="new-panel-top flex flex-col gap-10">
          <div className="text-center flex gap-3 flex-col ">
            <p className="headd text-3xl uppercase">WHAT'S NEW</p>
            <NavLink
              to="clothing"
              className="lowercase border-b border-black w-fit self-center"
            >
              Shop now
            </NavLink>
          </div>
          <div className="text-center flex gap-3 flex-col">
            <p className="headd text-3xl uppercase">WHAT'S NEXT</p>
            <NavLink
              to="shoes"
              className="lowercase border-b border-black w-fit self-center"
            >
              Shop shoes
            </NavLink>
          </div>
        </div>

        <div className="new-panel-down relative mt-5">
          <p className="headd font-bodoni uppercase">THE LATEST LIST</p>
        </div>
      </div>
      {/* some section */}
      <div className="some-section">
        <div className="section-1 relative mt-3 border border-t-neutral-400 p-3">
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img
                src="https://img.freepik.com/free-photo/medium-shot-woman-with-pink-outfit_23-2149068995.jpg?t=st=1736090422~exp=1736094022~hmac=435f3ff5396e236d967f7c84f65b6ba6ed84c28f196c1b05390a1bbad6e394bd&w=360"
                className="h-full"
              />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>New Pre Fall 25: Paintly Pronts</p>
              </div>
              <div>
                <NavLink
                  to="clothing"
                  className="lowercase border-b border-black w-fit"
                >
                  Shop pants
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 relative mt-3 border border-t-neutral-400  p-3">
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img
                src="https://img.freepik.com/free-photo/portrait-fashionable-boy-posing_23-2148184645.jpg?t=st=1736096751~exp=1736100351~hmac=5c861bc7dcc6e44a811b1561a425a13a40b7aba53027a409ef3b2c4a5c08e57d&w=360"
                className="h-full"
              />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Dope Quality Sundown: Too Dope</p>
              </div>
              <div>
                <NavLink
                  to="clothing"
                  className="lowercase border-b border-black w-fit"
                >
                  Shop now
                </NavLink>
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
              <img
                src="https://img.freepik.com/free-photo/portrait-young-handsome-male_23-2148884404.jpg?t=st=1736097032~exp=1736100632~hmac=4903b21b4de892867a137fd647ac345e7b8699359daa82238760a15d8b73025f&w=360"
                className="h-full"
              />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Trending Now: Citrus Hues, Spectacles & More</p>
              </div>
              <div>
                <NavLink
                  to="clothing"
                  className="lowercase border-b border-black w-fit"
                >
                  Shop pants
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* faculty closet */}
      <div className="p-2 relative mt-5">
        <p className="font-sans closet-heading before:bg-neutral-400 after:bg-neutral-400 text-center text-2xl lowercase font-normal text-oranges">
          men closet
        </p>

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
        {errorMessage && (
          <div className="flex flex-col justify-center text-neutral-600 mt-10">
            <p className="text-center">{errorMessage}</p>
          </div>
        )}

        {!loading && !errorMessage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 3,
              },
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-wrap p-2"
          >
            {products.map((product) => {
              return (
                <div key={product.id} className="relative mt-10 w-1/2">
                  <div className="flex h-96 p-5 cursor-pointer flex-col items-center justify-center gap-2 w-fit">
                    <img
                      className="w-44 h-44"
                      src={`https://${product.imageUrl}`}
                      alt=""
                    />
                    <p className="text-center relative text-[14px] mt-2 uppercase text-oranges">
                      {product.brandName}
                    </p>
                    <p className="text-center text-[14px]">{product.name}</p>
                    <p className="text-center">
                      ${product.price.current.value}
                    </p>
                    <button className="border border-black p-2">
                      add to cart
                    </button>
                  </div>
                </div>
              );
              // console.log(product.imageUrl);
            })}
          </motion.div>
        )}
        <div className="flex items-center justify-center relative mt-10">
          <NavLink
            to="shoes"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bodoni bg-oranges border-oranges text-white"
          >
            explore more
            <FontAwesomeIcon
              className="w-3 relative top-[1px]"
              icon={faRightLong}
            />
          </NavLink>
        </div>
      </div>

      {/* beyond fashion */}
      <div className="relative mt-5">
        <p className="font-sans closet-heading before:bg-neutral-400 after:bg-neutral-400 text-center text-2xl lowercase font-normal text-oranges">
          beyond
        </p>

        <div className="some-section relative mt-10">
          <div className="section-1 relative mt-3 border p-3">
            <div className="flex items-center flex-row gap-4">
              <div className="image font-bodoni w-[50%] bg-yellow-400 p-5 flex flex-col items-center h-64 justify-center">
                <h1 className="text-3xl text-white">UP TO</h1>
                <h1 className="text-4xl">40% OFF</h1>
                {/* <img
                  src="https://img.freepik.com/free-photo/medium-shot-woman-with-pink-outfit_23-2149068995.jpg?t=st=1736090422~exp=1736094022~hmac=435f3ff5396e236d967f7c84f65b6ba6ed84c28f196c1b05390a1bbad6e394bd&w=360"
                  className="h-full"
                /> */}
              </div>
              <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
                <div className="text-3xl">
                  <p>One in a milli skin cares on sale now!</p>
                </div>
                <div>
                  <button className="lowercase border-b border-black w-fit">
                    Shop skincares
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="section-2 relative mt-3 border border-t-neutral-400  p-3">
            <div className="flex items-center flex-row gap-4">
              <div className="image w-[50%]">
                <img
                  src="https://img.freepik.com/free-photo/portrait-fashionable-boy-posing_23-2148184645.jpg?t=st=1736096751~exp=1736100351~hmac=5c861bc7dcc6e44a811b1561a425a13a40b7aba53027a409ef3b2c4a5c08e57d&w=360"
                  className="h-full"
                />
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
                <img
                  src="https://img.freepik.com/free-photo/portrait-young-handsome-male_23-2148884404.jpg?t=st=1736097032~exp=1736100632~hmac=4903b21b4de892867a137fd647ac345e7b8699359daa82238760a15d8b73025f&w=360"
                  className="h-full"
                />
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
      </div>

      {/* w closet */}
      <div className="relative mt-5 pt-5 bg-white">
        <p className="font-bodoni closet-heading text-center uppercase underline underline-offset-4 font-normal text-black">
          w closet
        </p>
        {errorMessage && (
          <div className="flex flex-col justify-center text-neutral-600 mt-16">
            <p className="text-center">{errorMessage}</p>
          </div>
        )}
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
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          viewport={{
            once: true,
          }}
          className="grid grid-cols-2 grid-rows- gap-x-4 gap-y-7 p-4"
        >
          {menClothing.map((product) => {
            return (
              <div
                key={product.id}
                className="flex gap-2 flex-col mt-5 items-center hover:border-black hover:borde rounded-md"
              >
                <NavLink
                  to={`product-details/${product.id}`}
                  className="flex h-96 p-5 cursor-pointer flex-col items-center justify-center gap-2 w-fit"
                >
                  <img className="w-44 h-44" src={`${product.image}`} alt="" />
                  <p className="text-center relative text-[14px] mt-2 uppercase text-oranges">
                    {product.category}
                  </p>
                  <p className="text-center text-[14px]">{product.title}</p>
                  <p className="text-center">${product.price}</p>
                </NavLink>
                <button className="border border-black p-2 ">
                  add to cart
                </button>
              </div>
            );
            // console.log(product.imageUrl);
          })}
        </motion.div>
        )
        <div className="flex justify-center pb-5">
          <NavLink
            to="clothing"
            className="border border-oranges bg-oranges text-white p-1 lowercase"
          >
            Explore more
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-bodoni text-center relative mt-5">EDITOR'S PICK</h1>
      </div>
      <div className="some-section relative mt-5">
        <div className="section-1 relative mt-3 border p-3">
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img
                src="https://img.freepik.com/premium-photo/some-black-people_1187049-319.jpg?w=360"
                className="h-full"
              />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Godfred's Closet</p>
              </div>
              <div>
                <NavLink
                  to="clothing"
                  className="lowercase border-b border-black w-fit"
                >
                  shop now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 relative mt-3 border border-t-neutral-400  p-3">
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img
                src="https://img.freepik.com/premium-photo/some-black-people_1187049-275.jpg?w=360"
                className="h-full"
              />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>BestSellers</p>
              </div>
              <div>
                <NavLink
                  to="clothing"
                  className="lowercase border-b border-black w-fit"
                >
                  Shop now
                </NavLink>
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
          className="section-3 relative mt-3 border border-t-neutral-400 p-3 border-b-neutral-400 pb-10 "
        >
          <div className="flex items-center flex-row gap-4">
            <div className="image w-[50%]">
              <img
                src="https://img.freepik.com/premium-photo/elegant-african-american-woman-white-dress-posed-gracefully-against-brown-backdrop_1192423-2040.jpg?w=360"
                className="h-full"
              />
            </div>
            <div className="description gap-5 relative p-2 flex flex-col w-[50%] text-black">
              <div className="text-3xl">
                <p>Jewelries</p>
              </div>
              <div>
                <NavLink
                  to="jelweries"
                  className="lowercase border-b border-black w-fit"
                >
                  Shop now
                </NavLink>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Shop;
