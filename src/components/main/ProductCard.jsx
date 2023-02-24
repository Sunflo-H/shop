import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { name, imageUrl, category, price, id } = product;

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/detail/${id}`, { state: product });
  };

  return (
    <div className="m-1 " onClick={handleProductClick}>
      <div className="w-full">
        <img src={imageUrl} alt="" />
      </div>
      <div className="flex">
        <div>{name}</div>
        <div className="ml-auto">{price}</div>
      </div>
      <div>{category}</div>
    </div>
  );
}
