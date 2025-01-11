import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { NavLink, useParams } from "react-router";
import axios from "axios";
import { CartContext } from "./CartProvider";

function ProductDetails3() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const { cartItems, addToCart, addToFavorites } = useContext(CartContext);

  const randomProducts = () => {
    axios({
      method: "get",
      url: `https://dummyjson.com/products/${id}`,
    }).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    randomProducts();
  }, [id]);

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
  if (!products) {
    return (
      <div className="flex justify-center relative mt-16">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="h-full bg-white"
    >
      <ShopNavTop />
      <div className="relative mt-16 gap-1 flex p-5">
        <NavLink
          className="underline lowercase underline-offset-4"
          to="/shop/beyond-fashion"
        >
          beyond-fashion
        </NavLink>
        <p className="text-gray-500">/</p>
        <p className="lowercase">{products.title}</p>
      </div>
      <div className="bg-white p-5">
        <div key={products.id} className="flex flex-col gap-3">
          <img
            className="w-[200px] self-center"
            src={products.images[0]}
            alt={`${products.title} image`}
          />
          <p className="text-neutral-500 border border-neutral-300 w-fit p-2">
            {products.category}
          </p>
          <p className="font-bold font-bodoni text-oranges">{products.title}</p>
          <p className="text-neutral-500">{products.description}</p>
          <p className="font-bold font-sans">${products.price}</p>
          <button
            onClick={() => addToCart(products)}
            className="uppercase font-forum btn border p-2 rounded-none bg-black text-white relative mt-5"
          >
            Add to cart
          </button>
          <button
            onClick={() => addToFavorites(products)}
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

          <ul className="text-[14px]">
            <li>Category: {products.category}</li>
            <li>Brand: {products.brand}</li>
            {/* <li>Color: {products.color}</li> */}
            <li>Rating: {products.rating}</li>
            <li>Return Policy: {products.returnPolicy}</li>
            <li>Product Code: {products.sku}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetails3;
