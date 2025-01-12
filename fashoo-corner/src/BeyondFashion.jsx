import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { NavLink } from "react-router";
import axios from "axios";
import { CartContext } from "./CartProvider";

function BeyondFashion() {
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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { addToCart } = useContext(CartContext);
  const randomProducts = () => {
    setLoading(true);
    setErrorMessage("");
    axios({
      method: "get",
      url: "https://dummyjson.com/products?limit=20",
    })
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Cannot retrieve products, try again");
        setLoading(false);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    randomProducts();
  }, []);
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
          <p className="lowercase">Beyond Fashion</p>
        </div>
        <div className="p-5 flex">
          <h1 className="text-3xl lg:text-4xl font-light font-sans">
            Beyond Fashion
          </h1>
        </div>
        <div className="flex justify-center">
          {errorMessage && (
            <div className="flex flex-col justify-center text-neutral-600">
              <p className="text-center">{errorMessage}</p>
              <button onClick={randomProducts}>Refresh</button>
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
        </div>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-7 p-4"
          initial={{ opacity: 0 }}
          viewport={{
            once: true,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
        >
          {products.map((product) => {
            return (
              <div className="flex h-96 p-5 cursor-pointer flex-col items-center justify-center gap-2 ">
                <NavLink to={`products-details/${product.id}`} key={product.id}>
                  <img
                    className="w-[250px] h-[250px]"
                    src={product.images[0]}
                    alt=""
                  />
                  <p className="text-center relative text-[14px] mt-2 uppercase text-oranges">
                    {product.category}
                  </p>
                  <p className="text-center text-[14px]">{product.title}</p>
                  <p className="text-center">
                    ${`${product.price.toFixed(2)}`}
                  </p>
                </NavLink>
                <button
                  onClick={() => addToCart(product)}
                  className="border btn border-black font-medium bg-black text-white p-2  "
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BeyondFashion;
