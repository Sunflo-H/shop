import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addCartList = (product) => {
    // 겹치는 상품이 있을때
    if (cartList.find((item) => item.product.id === product.id)) {
      setCartList(
        cartList.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else setCartList([...cartList, { product, quantity: 1 }]);
  };

  const updateCartList = () => {
    setCartList();
  };

  const removeCartList = (product) => {
    setCartList([...cartList]);
  };

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);
  return (
    <CartContext.Provider value={{ cartList, addCartList }}>
      {children}
    </CartContext.Provider>
  );
};
