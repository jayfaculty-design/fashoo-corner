import React, { useEffect, useState } from "react";
import ShopNavTop from "./ShopNavTop";
import { NavLink } from "react-router";
import axios from "axios";
import { clothing } from "./products/products";
import { motion } from "framer-motion";
function Clothing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
  return (
    <div>
      <ShopNavTop />
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="h-full bg-white"
      >
        <div className="relative mt-16 gap-1 flex p-5">
          <NavLink
            className="underline lowercase underline-offset-4"
            to="/shop"
          >
            Shop
          </NavLink>
          <p className="text-gray-500">/</p>
          <p className="lowercase">clothing</p>
        </div>

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
          className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-7 p-4"
        >
          {clothing.map((products) => {
            return (
              <NavLink
                className="flex h-96 p-5 cursor-pointer flex-col items-center justify-center gap-2 w-fit"
                key={products.id}
                to={`products-details/${products.id}`}
              >
                <img src={products.image_url} alt="image" />
                <p className="text-center relative text-[14px] mt-2 uppercase text-oranges">
                  {products.category}
                </p>
                <p className="text-center text-[14px]">{products.name}</p>
                <p className="text-center">${products.price}</p>
                <button className="border border-black p-2 ">
                  Add to cart
                </button>
              </NavLink>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Clothing;
