import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function PriceBox({ title }) {
  const { cartList } = useContext(CartContext);

  const deliveryFee = 3000;

  let price = cartList.reduce((acc, cur) => acc + Number(cur.price), 0);

  if (title === "배송비") price = deliveryFee;
  if (title === "총가격") price = price + deliveryFee;

  return (
    <div className="bg-gray-100 rounded-md px-8 py-4 text-center">
      <div className="text-sm font-bold">{title}</div>
      <div className="text-rose-400 font-bold">₩{price}</div>
    </div>
  );
}
