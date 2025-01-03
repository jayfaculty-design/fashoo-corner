import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
function Shop() {
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
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <p>Shop</p>
    </motion.div>
  );
}

export default Shop;
