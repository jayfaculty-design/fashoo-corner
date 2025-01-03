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
    },
  };
  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <p>Shop</p>
    </motion.div>
  );
}

export default Shop;
