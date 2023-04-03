import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import {
  addFavorites,
  getFavorites,
  removeFavorites,
} from "../../../api/firebase";
import { useAuthContext } from "../../../context/AuthContext";
import { useQuery } from "react-query";

export default function ProductCard({ product, favorites }) {
  const { title, imageUrl, category, price, id } = product;
  const [isLove, setIsLove] = useState(false); // 찜
  const { uid } = useAuthContext();
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/products/${category}/${id}`, { state: { product } });
  };

  const handleFavoriteClick = () => {
    setIsLove((prev) => {
      !prev ? addFavorites(product, uid) : removeFavorites(product, uid);
      return !prev;
    });
  };

  return (
    <div className="m-1 ">
      <div className="flex items-center justify-between mb-4">
        <span className="bg-black text-white py-px px-1 text-sm">New</span>
        <AiFillHeart
          className={`text-2xl cursor-pointer ${isLove && "text-rose-500"}`}
          onClick={handleFavoriteClick}
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
