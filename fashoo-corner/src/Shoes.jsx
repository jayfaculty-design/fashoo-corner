import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import { NavContext } from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ShopNavTop from "./ShopNavTop";

function Shoes() {
  const { loading, errorMessage, setErrorMessage } = useContext(NavContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=20&lang=en-US",
      headers: {
        "x-rapidapi-host": "asos2.p.rapidapi.com",
        "x-rapidapi-key": "848cdd11b1msh7adfec8147814dbp135c7bjsnaffe2ec3ddb2",
      },
    })
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error Response:", error.response.data);
          setErrorMessage("Cannot retrieve products, try again later");
        } else {
          console.log("Error", error.message);
        }
      });

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
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="h-full"
    >
      {/* Start */}
      <ShopNavTop />
      <div className="relative mt-16 gap-1 flex p-5">
        <NavLink className="underline lowercase underline-offset-4" to="/shop">
          Shop
        </NavLink>
        <p className="text-gray-500">/</p>
        <p className="lowercase">Shoes</p>
      </div>

      <div className="p-5 flex">
        <h1 className="text-3xl font-light font-sans">Men's Designer Shoes</h1>
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
      {errorMessage && (
        <div className="flex flex-col justify-center text-neutral-600 mt-16">
          <p className="text-center">{errorMessage}</p>
        </div>
      )}
      {!loading && !errorMessage && (
        <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-7 p-4">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex gap-2 flex-col items-center hover:border-black rounded-md"
              >
                <img
                  className="w-[250px] h-[250px]"
                  src={`https://${product.imageUrl}`}
                  alt="images"
                />
                <p className="uppercase text-oranges">{product.brandName}</p>
                <p className="text-center text-[14px]">{product.name}</p>
                <p>{product.price.current.text}</p>
                <button className="border border-black p-2">Add to cart</button>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

export default Shoes;
