import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import axios from "axios";
import { NavLink } from "react-router";
import { CartContext } from "./CartProvider";
function Jelweries() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  function fetchData() {
    setLoading(true);
    setErrorMessage("");

    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/category/jewelery",
    })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setErrorMessage("");
        setLoading(false);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
        setErrorMessage("Error loading Products please try again later");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
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
        <div className="relative mt-16 lg:mt-32 gap-1 flex p-5">
          <NavLink
            className="underline lowercase underline-offset-4"
            to="/shop"
          >
            Shop
          </NavLink>
          <p className="text-gray-500">/</p>
          <p className="lowercase">Jelweries</p>
        </div>
        <div className="p-5 flex">
          <h1 className="text-3xl lg:text-4xl font-light font-sans">
            Cool Jelweries
          </h1>
        </div>

        <div>
          {loading && (
            <div className="flex justify-center relative mt-16 pb-36">
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
            <div className="flex flex-col justify-center text-neutral-600 mt-12 pb-36">
              <p className="text-center">{errorMessage}</p>
              <button onClick={() => fetchData()}>Refresh</button>
            </div>
          )}
        </div>

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
            className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-7 p-4"
          >
            {products.map((product) => {
              const cartItem = cartItems.find((item) => item.id === product.id);
              return (
                <div className="flex h-96 p-5 flex-col items-center justify-center gap-2">
                  <NavLink
                    key={product.id}
                    to={`/shop/product-details/${product.id}`}
                  >
                    <img
                      src={product.image}
                      className="w-[150px] h-[150px]"
                      alt="image"
                    />
                    <p className="text-center relative text-[14px] mt-2 uppercase text-oranges">
                      {product.category}
                    </p>
                    <p className="text-center text-[14px]">{product.name}</p>
                    <p className="text-center">${product.price}</p>
                  </NavLink>
                  {cartItem ? (
                    <button
                      onClick={() => removeFromCart(product)}
                      className="border btn border-black text-white bg-black p-2"
                    >
                      remove from cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="border btn border-black text-white bg-black p-2"
                    >
                      add to cart
                    </button>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Jelweries;
