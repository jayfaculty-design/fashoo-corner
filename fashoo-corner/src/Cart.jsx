import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { CartContext } from "./CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { clothing } from "./products/products";
// const { cartItems, setCartItems } = useContext(CartContext);

function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotal,
    addToFavorites,
    cutFromCart,
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
          <h1 className="text-3xl font-forum">My Bag</h1>
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
              <div className="flex items-center justify-center mt-24">
                <h1 className="text-center text-[18px] font-forum font-bold">
                  LOOKING FOR THESE...?
                </h1>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 mt-5">
                {clothing.slice(0, 4).map((clothings) => {
                  return (
                    <>
                      <div
                        className="p-5 flex flex-col gap-3"
                        key={clothings.id}
                      >
                        <img
                          className="w-[100px]"
                          src={clothings.image_url}
                          alt=""
                        />
                        <p className="font-bold font-forum">
                          ${clothings.price.toFixed(2)}
                        </p>
                        <p className="text-neutral-600">{clothings.name}</p>
                        <button
                          onClick={() => addToCart(clothings)}
                          className="btn w-full bg-black text-white"
                        >
                          add to cart
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <>
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

                      <button className="border  flex items-center gap-3 text-[14px] p-1 w-fit">
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
                    <button onClick={() => cutFromCart(item)}>
                      <img
                        width="16"
                        height="16"
                        src="https://img.icons8.com/ios/50/delete-sign.png"
                        alt="delete-sign"
                        className={`cursor-pointer`}
                      />
                    </button>
                  </div>
                </>
              );
            })
          )}
        </div>
        {cartItems.length > 0 ? (
          <>
            <div className="flex justify-between">
              <div></div>
              <div className="flex gap-5 items-center font-forum mt-10">
                <h1 className="captialize font-bold">Sub-Total</h1>
                <p className="font-bold tracking-wider">
                  ${getTotal().toFixed(2)}
                </p>
              </div>
            </div>
            <button className="bg-green-400 btn border-none w-full p-3 text-white font-bold font-forum tracking-widest mt-5">
              CHECKOUT
            </button>
          </>
        ) : (
          <div></div>
        )}
      </motion.div>
    </div>
  );
}

export default Cart;
