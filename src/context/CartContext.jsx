import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartList = (product) => {
    setCartList([...cartList, product]);
  };

  const updateCartList = () => {
    setCartList();
  };

  const removeCartList = () => {
    setCartList();
  };

  return (
    <CartContext.Provider value={{ cartList, addCartList }}>
      {children}
    </CartContext.Provider>
  );
};
