import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";
import { shoes } from "./products/products";
import { CartContext } from "./CartProvider";

function Shoes() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  function fetchData() {
    setProducts(shoes);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 2000);
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
      className="h-full bg-white pb-14"
    >
      {/* Start */}
      <ShopNavTop />
      <div className="relative mt-16 lg:mt-32 gap-1 flex p-5">
        <NavLink className="underline lowercase underline-offset-4" to="/shop">
          Shop
        </NavLink>
        <p className="text-gray-500">/</p>
        <p className="lowercase">Shoes</p>
      </div>
      <div className="p-5 flex">
        <h1 className="text-3xl lg:text-4xl font-light font-sans">
          Men's Designer Shoes
        </h1>
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

      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-4 gap-y-7 p-4">
        {products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          return (
            <>
              <div
                key={product.id}
                className="flex gap-2 flex-col items-center hover:border-black rounded-md"
              >
                <NavLink
                  to={`/shop/shoes/products-details/${product.id}`}
                  className="flex flex-col items-center"
                >
                  <img
                    className="w-[250px] h-[250px]"
                    src={`${product.image}`}
                    alt={`${product.name} image`}
                  />
                  <p className="uppercase text-oranges text-center">
                    {product.category}
                  </p>
                  <p className="text-center text-[14px]">{product.name}</p>
                  <p>{product.price}</p>
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
            </>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Shoes;
