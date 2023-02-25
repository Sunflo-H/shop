import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../components/main/cart/CartItem";
import PriceBox from "../components/main/cart/PriceBox";

export default function Cart() {
  const { cartList } = useContext(CartContext);

  return (
    <div className="px-4">
      <div className="text-center py-2 px-4 border-b">
        <span className="text-xl font-bold">내 장바구니</span>
      </div>
      <div className="px-5">
        {cartList.map((item, i) => (
          <CartItem product={item.product} key={i} />
        ))}

        <div className="flex justify-around border-t mt-4 py-4">
          <PriceBox title="상품 총액" />
          <div className="py-7">
            <AiFillPlusCircle className="text-xl" />
          </div>
          <PriceBox title="배송비" />

          <div className="py-7">
            <FaEquals className="text-xl" />
          </div>
          <PriceBox title="총가격" />
        </div>

        <div className="bg-rose-400 text-center py-1 mt-4 mb-20 cursor-pointer">
          <span className="text-white font-bold ">주문하기</span>
        </div>
      </div>
    </div>
  );
}
