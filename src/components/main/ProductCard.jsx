import React from "react";

export default function ProductCard({ product }) {
  const { name, image, category, price } = product;
  return (
    <div className="bg-red-500 m-1 ">
      <div className="w-10">
        <img src={image} alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
      <div>{category}</div>
    </div>
  );
}
