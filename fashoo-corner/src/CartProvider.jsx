import { createContext, useState } from "react";
import { clothing } from "./products/products";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
