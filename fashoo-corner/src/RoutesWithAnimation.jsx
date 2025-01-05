import React from "react";
import { useLocation, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import Fashion from "./Fashion";
import Beauty from "./Beauty";
import Home2 from "./Home2";

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />}>
        <Route path="fashion" element={<Fashion />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="home" element={<Home2 />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesWithAnimation;
