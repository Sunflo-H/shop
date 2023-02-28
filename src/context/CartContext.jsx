import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartList = (product) => {
    // 겹치는 상품이 있을때
    if (cartList.find((item) => item.product === product)) {
      setCartList(
        cartList.map((item) =>
          item.product === product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else setCartList([...cartList, { product, quantity: 1 }]);
  };

  const updateCartList = (product, type) => {
    if (type === "plus")
      setCartList(
        cartList.map((item) =>
          item.product === product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    else
      setCartList(
        cartList.map((item) =>
          item.product === product && item.quantity !== 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
  };

  const removeCartList = (product) => {
    setCartList(cartList.filter((item) => item.product !== product));
  };

  return (
    <CartContext.Provider
      value={{ cartList, addCartList, updateCartList, removeCartList }}
    >
      {children}
    </CartContext.Provider>
  );
};
