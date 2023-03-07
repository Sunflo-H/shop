import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard({ product }) {
  const { title, imageUrl, category, price, id } = product;
  const [isNew, setNew] = useState(); // 새상품
  const [isLove, setIsLove] = useState(false); // 찜
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <div className="m-1 ">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-black text-white py-px px-1 text-sm">New</span>
        <AiFillHeart
          className={`text-2xl cursor-pointer ${isLove && "text-rose-500"}`}
          onClick={() => setIsLove((prev) => !prev)}
        />
      </div>
      <div className="w-full" onClick={handleProductClick}>
        <img src={imageUrl} alt="" />
      </div>
      <div className="flex">
        <div>{title}</div>
        <div className="ml-auto">{price}</div>
      </div>
      <div>{category}</div>
    </div>
  );
}
