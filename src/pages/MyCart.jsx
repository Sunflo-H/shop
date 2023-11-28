import React, { useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import CartItem from "../components/main/cart/CartItem";
import PriceCard from "../components/main/cart/PriceCard";

import useCart from "../hooks/useCart";
import EmptyProduct from "../components/error/EmptyProduct";

const DELIVERY_FEE = 3;

export default function MyCart() {
  const {
    cartQuery: { data: productsInCart },
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

  useEffect(() => {
    console.log(productsInCart);
  }, [productsInCart]);

  return (
    <div className="px-4 pt-20 ">
      <div className="text-center py-2 px-4 border-b">
        <span className="text-xl font-bold">My Cart</span>
      </div>
      {/* {productsInCart ? (
        <EmptyProduct />
      ) : ( */}
      <>
        <div className="px-5 max-w-screen-2xl m-auto">
          {productsInCart &&
            productsInCart.map((product, i) => (
              <CartItem product={product} key={i} />
            ))}

          <div className="flex justify-around border-t mt-10 py-4 bg-gray-100">
            <PriceCard title="Product total" price={allPrice()} />
            <div className="py-7">
              <AiFillPlusCircle className="text-xl" />
            </div>
            <PriceCard title="Shipping cost" price={DELIVERY_FEE} />

            <div className="py-7">
              <FaEquals className="text-xl" />
            </div>
            <PriceCard title="Total price" price={allPrice() + DELIVERY_FEE} />
          </div>

          <div className="bg-black text-center py-1 mt-10 mb-20 cursor-pointer">
            <div className="text-white font-bold py-2">주문하기</div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
}
