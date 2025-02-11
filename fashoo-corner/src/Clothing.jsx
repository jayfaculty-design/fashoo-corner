import React, { useContext, useEffect, useState } from "react";
import ShopNavTop from "./ShopNavTop";
import { NavLink } from "react-router";
import axios from "axios";
import { clothing } from "./products/products";
import { motion } from "framer-motion";
import { CartContext } from "./CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
function Clothing() {
  const [loading, setLoading] = useState(true);
  const { cartItems, addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(clothing);
      window.scrollTo(0, 0);
      setLoading(false);
    }, 2000);
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
  return (
    <div>
      <ShopNavTop />
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="h-full bg-white pb-14"
      >
        <div className="relative mt-16 lg:mt-32 gap-1 flex p-5">
          <NavLink
            className="underline lowercase underline-offset-4"
            to="/shop"
          >
            Shop
          </NavLink>
          <p className="text-gray-500">/</p>
          <p className="lowercase">clothing</p>
        </div>
        <div className="p-5 flex">
          <h1 className="text-3xl lg:text-4xl font-light font-sans">
            Home Designer Clothes
          </h1>
        </div>

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
              duration: 3,
            },
          }}
          viewport={{
            once: true,
          }}
          className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-7 p-4"
        >
          {items.map((products) => {
            return (
              <div className="flex gap-2 flex-col mt-5 items-center hover:border-black hover:borde rounded-md">
                <NavLink
                  key={products.id}
                  to={`/shop/clothing/products-details/${products.id}`}
                >
                  <img
                    src={products.image_url}
                    className="w-[250px] h-[250px]"
                    alt="image"
                  />
                  <p className="text-center relative text-[14px] mt-2 uppercase text-oranges">
                    {products.category}
                  </p>
                  <p className="text-center text-[14px]">{products.name}</p>
                  <p className="text-center">${products.price}</p>
                </NavLink>
                <button
                  onClick={() => {
                    addToCart(products);
                  }}
                  className={`add-btn border btn border-black font-medium bg-black text-white p-2`}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Clothing;
