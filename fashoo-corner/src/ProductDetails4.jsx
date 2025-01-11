import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { NavLink, useParams } from "react-router";
import { shoes } from "./products/products";
import { CartContext } from "./CartProvider";

function ProductDetails4() {
  const { addToFavorites, addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = shoes.find((pr) => pr.id === parseInt(id));

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
          to="/shop/shoes"
        >
          shoes
        </NavLink>
        <p className="text-gray-500">/</p>
        <p className="lowercase">{product.name}</p>
      </div>
      <div className="bg-white p-5">
        <div key={product.id} className="flex flex-col gap-3">
          <img
            className="w-[200px] self-center"
            src={product.image_url || product.image}
            alt="product-image"
          />
          <p className="text-neutral-500 border border-neutral-300 w-fit p-2">
            {product.category}
          </p>
          <p className="font-bold font-bodoni text-oranges">{product.name}</p>
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

          <ul className="text-[14px]">
            <li>Category: {product.category}</li>
            <li>Color: {product.color}</li>
            <li>Size(s): {product.sizes}</li>
            <li>Product Code: {product.sku || "None"}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductDetails4;
