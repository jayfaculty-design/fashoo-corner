import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import LocationProvider from "./LocationProvider";
import RoutesWithAnimation from "./RoutesWithAnimation";
import Menu from "./Menu";
import Shopmenu from "./Shopmenu";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <App>
          <Menu />
          <Shopmenu />
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
          <Footer />
        </App>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);
