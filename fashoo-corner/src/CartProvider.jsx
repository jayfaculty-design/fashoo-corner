import { createContext, useEffect, useState } from "react";
import { clothing } from "./products/products";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [favoriteItems, setFavoriteItems] = useState(
    localStorage.getItem("favoriteItems")
      ? JSON.parse(localStorage.getItem("favoriteItems"))
      : []
  );

  function addToFavorites(item) {
    const isItemInFavorite = favoriteItems.find(
      (favoriteItem) => favoriteItem.id === item.id
    );
    if (isItemInFavorite) {
      return;
    } else {
      setFavoriteItems([...favoriteItems, { ...item }]);
    }
  }
  function addToCart(item) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(item) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  }
  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  function clearCart() {
    setCartItems([]);
  }
  function clearFavorites() {
    setFavoriteItems([]);
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);
  useEffect(() => {
    const favoriteItems = localStorage.getItem("favoriteItems");
    if (favoriteItems) {
      setFavoriteItems(JSON.parse(favoriteItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        addToFavorites,
        favoriteItems,
        clearFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
