import React from "react";
import { motion } from "framer-motion";
import ShopNavTop from "./ShopNavTop";

function Cart() {
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
        <div className="p-5 flex mt-16">
          <h1 className="text-2xl font-sans font-normal">Shopping Bag</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Cart;
