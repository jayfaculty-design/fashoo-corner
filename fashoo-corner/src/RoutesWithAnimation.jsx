import React from "react";
import { useLocation, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";
import Fashion from "./Fashion";
import Beauty from "./Beauty";
import Home2 from "./Home2";
import Shoes from "./Shoes";
import Shopmenu from "./Shopmenu";
import ProductDetails from "./ProductDetails";
import Clothing from "./Clothing";
import ProductDetails2 from "./ProductDetails2";
import Error404 from "./Error404";
import Jelweries from "./Jelweries";
import Cart from "./Cart";
import Favorites from "./Favorites";

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="shop" element={<Shop />}>
        <Route path="shop-menu" element={<Shopmenu />}>
          <Route path=":fashion" element={<Fashion />} />
          <Route path=":beauty" element={<Beauty />} />
        </Route>

        <Route path="home" element={<Home2 />} />
      </Route>
      <Route path="/*" element={<Error404 />} />
      <Route path="shop/shoes" element={<Shoes />} />
      <Route path="shop/clothing" element={<Clothing />} />
      <Route path="shop/jelweries" element={<Jelweries />} />
      <Route path="shop/cart" element={<Cart />} />
      <Route path="shop/favorites" element={<Favorites />} />
      <Route path="shop/product-details/:id" element={<ProductDetails />} />
      <Route
        path="shop/clothing/products-details/:id"
        element={<ProductDetails2 />}
      />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesWithAnimation;
