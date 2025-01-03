import { AnimatePresence } from "framer-motion";
import React from "react";

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

export default LocationProvider;
