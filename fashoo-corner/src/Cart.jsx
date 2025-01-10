import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { CartContext } from "./CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

// const { cartItems, setCartItems } = useContext(CartContext);

function Cart() {
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotal,
    addToFavorites,
  } = useContext(CartContext);
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
        className="h-full bg-white p-5"
      >
        <div className="flex justify-between items-center mt-16">
          <h1 className="text-2xl font-sans font-normal">My Bag</h1>
          <p className="text-[14px] text-neutral-600">
            Items are reserved for 60 minutes
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between  border-b pb-3">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faTruck} />
              <p className="text-[14px] text-neutral-600">
                Sold and shipped by DHL
              </p>
            </div>
            <div onClick={() => clearCart()} className="cursor-pointer">
              <p className="lowercase text-[14px] text-neutral-700 underline underline-offset-2">
                Clear cart
              </p>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col p-24 gap-2">
              <p className="text-[14px] text-neutral-700 flex justify-center text-center ">
                Your Cart Is Empty
              </p>
              <NavLink
                to="/shop"
                className="text-[14px] bg-black p-1 text-white flex items-center justify-center"
              >
                Shop Products
              </NavLink>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mt-10 flex justify-between items-start"
                >
                  <img
                    src={item.image || item.image_url}
                    className="w-[120px]"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-green-500">
                      ${item.price}
                    </p>
                    <p className="lowercase text-neutral-800 text-[14px] w-[150px]">
                      {item.title || item.name}
                    </p>
                    <div className="flex items-center">
                      <p className="text-[14px] text-neutral-600">
                        {item.category}
                      </p>
                      <select
                        className="border-none text-[14px] text-neutral-600"
                        name="size"
                        id="size"
                      >
                        {item.sizes?.map((size, index) => {
                          return (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="text-[14px] text-neutral-600">
                        Qty {item.quantity}
                      </p>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="border text-oranges border-oranges flex items-center justify-center rounded-full h-[15px] w-[15px]"
                      >
                        -
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="border text-oranges border-oranges flex items-center justify-center rounded-full h-[15px] w-[15px]"
                      >
                        +
                      </button>
                    </div>

                    <button className="border flex items-center gap-3 text-[14px] p-1 w-fit">
                      <img
                        width="16"
                        height="16"
                        src="https://img.icons8.com/ios/100/like--v1.png"
                        alt="like--v1"
                        className="cursor-pointer"
                        onClick={() => addToFavorites(item)}
                      />
                      Save for later
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item)}>
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/ios/50/delete-sign.png"
                      alt="delete-sign"
                      className={`cursor-pointer`}
                    />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Cart;
