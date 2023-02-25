import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export default function CartItem({ product }) {
  const { id, name, imageUrl, price, description, size, category } = product;
  return (
    <div className="flex my-2">
      <div className="w-40">
        <img src={imageUrl} alt="" />
      </div>
      <div className="my-auto mx-4">
        <div>
          <div>
            <span className="font-bold">{name}</span>
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
          <AiOutlineMinusSquare className="text-lg cursor-pointer" />
        </div>
        <div className="px-3">
          <span className="text-xl">1</span>
        </div>
        <div className="py-1.5">
          <AiOutlinePlusSquare className="text-lg cursor-pointer" />
        </div>
        <div className="py-1.5 pl-6">
          <BsFillTrashFill className="text-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
