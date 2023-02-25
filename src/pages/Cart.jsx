import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../components/main/CartItem";

export default function Cart() {
  const { cartList } = useContext(CartContext);
  console.log(cartList);

  return (
    <div className="px-4">
      <div className="text-center py-2 px-4 border-b">
        <span className="text-xl font-bold">내 장바구니</span>
      </div>
      <div className="px-5">
        {cartList.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}

        <div className="flex justify-around border-t-2 py-4">
          <div className="bg-gray-100 rounded-md p-4 text-center">
            <div className="text-sm font-bold">상품 총액</div>
            <div className="text-rose-400 font-bold">₩2000000</div>
          </div>
          <div className="py-7">
            <AiFillPlusCircle className="text-xl" />
          </div>
          <div className="bg-gray-100 rounded-md p-4 text-center">
            <div className="text-sm font-bold">배송비</div>
            <div className="text-rose-400 font-bold">₩3000</div>
          </div>
          <div className="py-7">
            <FaEquals className="text-xl" />
          </div>
          <div className="bg-gray-100 rounded-md p-4 text-center">
            <div className="text-sm font-bold">총가격</div>
            <div className="text-rose-400 font-bold">₩2003000</div>
          </div>
        </div>

        <div className="bg-rose-500 text-center py-1 mt-4">
          <span className="text-white font-bold">주문하기</span>
        </div>
      </div>
    </div>
  );
}
