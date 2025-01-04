import React from "react";
import { useLocation, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />}>
        
      </Route>
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesWithAnimation;
