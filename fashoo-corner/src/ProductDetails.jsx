import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router";
import { NavContext } from "./App";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ShopNavTop from "./ShopNavTop";
import { CartContext } from "./CartProvider";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartItems, addToCart, addToFavorites } = useContext(CartContext);

  const [errorMessage, setErrorMessage] = useState("");
  const fetchData = () => {
    setLoading(true);
    setErrorMessage("");
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`,
    })
      .then((response) => {
        setProducts(response.data);
        setErrorMessage("");
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };
  //   const fetchJewerelyData = () => {
  //     axios({
  //       method: "get",
  //       url: "https://fakestoreapi.com/products/category/jewelery",
  //     })
  //       .then((response) => {
  //         setProducts(response.data);
  //         setErrorMessage("");
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setErrorMessage("Cannot retrieve product details, try again");
  //       })
  //       .finally(() => setLoading(false));
  //   };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    // fetchJewerelyData();
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
      className="h-full bg-white"
    >
      <ShopNavTop />
      {/* Start */}

      <div className="relative mt-16 gap-1 flex p-5 lg:mt-32">
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
        {errorMessage && (
          <div className="flex flex-col justify-center text-neutral-600">
            <p className="text-center">{errorMessage}</p>
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
          <button
            onClick={() => addToCart(product)}
            className="uppercase font-forum btn border p-2 rounded-none bg-black text-white relative mt-5"
          >
            Add to cart
          </button>
          <button
            onClick={() => addToFavorites(product)}
            className="uppercase font-forum border  text-black btn rounded-none hover:bg-neutral-400 border-black p-2 bg-neutral-100 flex items-center justify-center gap-3"
          >
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
