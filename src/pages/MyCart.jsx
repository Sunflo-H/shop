import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../components/main/cart/CartItem";
import PriceCard from "../components/main/cart/PriceCard";

import useCart from "../hooks/useCart";

const DELIVERY_FEE = 3000;

export default function MyCart() {
  const {
    cartQuery: { isLoading, error, data: productsInCart },
  } = useCart();

  const allPrice = () => {
    return (
      productsInCart &&
      productsInCart.reduce(
        (acc, cur) => acc + Number(cur.price) * cur.quantity,
        0
      )
    );
  };

  return (
    <div className="px-4 pt-20">
      <div className="text-center py-2 px-4 border-b">
        <span className="text-xl font-bold">내 장바구니</span>
      </div>
      <div className="px-5">
        {productsInCart &&
          productsInCart.map((product, i) => (
            <CartItem product={product} key={i} />
          ))}

        <div className="flex justify-around border-t mt-4 py-4">
          <PriceCard title="상품 총액" price={allPrice()} />
          <div className="py-7">
            <AiFillPlusCircle className="text-xl" />
          </div>
          <PriceCard title="배송비" price={DELIVERY_FEE} />

          <div className="py-7">
            <FaEquals className="text-xl" />
          </div>
          <PriceCard title="총가격" price={allPrice() + DELIVERY_FEE} />
        </div>

        <div className="bg-rose-400 text-center py-1 mt-4 mb-20 cursor-pointer">
          <span className="text-white font-bold ">주문하기</span>
        </div>
      </div>
    </div>
  );
}
