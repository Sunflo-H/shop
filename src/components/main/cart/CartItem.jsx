import React, { useContext, useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { uploadCart } from "../../../api/firebase";
import { useAuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/CartContext";

export default function CartItem({ product }) {
  const { uid } = useAuthContext();
  const { id, title, imageUrl, price, quantity } = product;
  const { cartList, updateCartList, removeCartList } = useContext(CartContext);

  const handlePlusBtnClick = () => {
    uploadCart({ ...product, quantity: quantity + 1 }, uid);
  };

  const handleMinusBtnClick = () => {
    if (quantity === 1) return;
    uploadCart({ ...product, quantity: quantity - 1 }, uid);
  };

  const handleRemoveBtnClick = () => {
    removeCartList(product);
  };

  return (
    <div className="flex my-2">
      <div className="w-40">
        <img src={imageUrl} alt="" />
      </div>
      <div className="my-auto mx-4">
        <div>
          <div>
            <span className="font-bold">{title}</span>
          </div>
          <div>
            <span className="text-rose-400 font-bold">M</span>
          </div>
          <div>
            <span className="font-bold">₩{price}</span>
          </div>
        </div>
      </div>
      <div className="flex my-auto ml-auto">
        <div className="py-1.5 ">
          <AiOutlineMinusSquare
            className="text-lg cursor-pointer"
            onClick={handleMinusBtnClick}
          />
        </div>
        <div className="px-3">
          <span className="text-xl">{quantity}</span>
        </div>
        <div className="py-1.5">
          <AiOutlinePlusSquare
            className="text-lg cursor-pointer"
            onClick={handlePlusBtnClick}
          />
        </div>
        <div className="py-1.5 pl-6">
          <BsFillTrashFill
            className="text-lg cursor-pointer"
            onClick={handleRemoveBtnClick}
          />
        </div>
      </div>
    </div>
  );
}
