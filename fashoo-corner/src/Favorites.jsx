import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { CartContext } from "./CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

function Favorites() {
  const { favoriteItems, clearFavorites, removeFromFavorites, addToCart } =
    useContext(CartContext);
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
  return (
    <div>
      <ShopNavTop />
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="h-full bg-white"
      >
        <div className="p-5 flex mt-16 lg:mt-32 lg:p-10 items-center justify-between">
          <h1 className="text-3xl lg:text-4xl font-forum font-normal">
            Saved Items
          </h1>
          <p
            onClick={() => clearFavorites()}
            className="text-neutral-700 cursor-pointer underline underline-offset-2"
          >
            clear favorites
          </p>
        </div>
        <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-3 place-items-center">
          {favoriteItems.length === 0 ? (
            <div className="flex justify-center p-36 ">
              <div className="w-[350px]  flex flex-col gap-5">
                <p className="text-center text-[14px] text-neutral-700">
                  No Saved Items
                </p>
                <NavLink
                  to="/shop"
                  className="text-[14px] bg-black p-1 text-white flex items-center justify-center"
                >
                  Shop Products
                </NavLink>
              </div>
            </div>
          ) : (
            favoriteItems.map((item) => {
              return (
                <div className="">
                  <div key={item.id} className="flex flex-col gap-2 w-[150px]">
                    <img
                      src={`${item.image || item.image_url || item.images[0]}`}
                      alt={`${item.name} image`}
                      className="w-[150px]"
                    />
                    <p className="text-[14px] w-[140px] text-neutral-900">
                      {item.name || item.title}
                    </p>
                    <div className="w-[150px] flex justify-between">
                      <p className="font-bold font-sans">
                        ${item.price.toFixed(2)}
                      </p>
                      <FontAwesomeIcon
                        onClick={() => removeFromFavorites(item)}
                        icon={faTrash}
                        className="text-oranges cursor-pointer"
                      />
                    </div>

                    <div className="border-t border-b pt-2 pb-2 w-[150px]">
                      <p className="text-[14px] text-neutral-600">
                        {item.color}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => addToCart(item)}
                        className="btn w-full bg-black text-white"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Favorites;
