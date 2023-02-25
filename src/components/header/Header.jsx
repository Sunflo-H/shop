import React, { useContext, useEffect, useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Header() {
  const navigate = useNavigate();

  const { cartList } = useContext(CartContext);

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleProductRegistrationClick = () => {
    navigate("/registration");
  };

  return (
    <div className="flex w-full pt-2 border-b pb-2 mb-2">
      {/* 로고 */}
      <div
        className="flex text-rose-500 cursor-pointer"
        onClick={handleLogoClick}
      >
        <RiShoppingBag3Line className="text-3xl" />
        <span className="text-2xl font-bold">Shoppy</span>
      </div>

      {/* 상품과 장바구니 */}
      <div className="flex ml-auto mr-8 pt-1">
        <div
          className=" font-bold mr-4 cursor-pointer"
          onClick={handleProductsClick}
        >
          Products
        </div>
        <div className="cursor-pointer" onClick={handleCartClick}>
          <AiOutlineShoppingCart className="text-2xl" />
          {cartList.length === 0 ? (
            ""
          ) : (
            <div className="absolute top-2 ml-3 w-4 h-4 z-10 bg-red-500 rounded-full  text-center leading-3 ">
              <span className="font-bold text-white text-xs">
                {cartList.length}
              </span>
            </div>
          )}
        </div>
        <div className="pt-1" onClick={handleProductRegistrationClick}>
          <BsFillPencilFill className="text-lg" />
        </div>
      </div>

      {/* 로그인 */}
      <div className="bg-rose-500 text-white text-lg font-bold  py-1 px-4 cursor-pointer">
        Login
      </div>
    </div>
  );
}
