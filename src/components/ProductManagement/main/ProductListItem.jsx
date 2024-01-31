import React from "react";

export default function ProductListItem({ product_KeyAndValue }) {
  const [key, product] = product_KeyAndValue;
  console.log(product);
  return (
    <li className="flex px-8 py-3">
      <div className="w-20">
        <input type="checkbox" />
        <span className="ml-1">9999</span>
      </div>
      <div className="w-96 text-center">{product.title}</div>
      <div className="w-36 text-center">{product.price}</div>
      <div className="w-48 text-center">{product.category}</div>
      <div className="w-40 text-center">{product.status}</div>
      <div className="w-16 text-center mr-4">{product.stock}</div>
      <div className="w-48 text-center">2024-01-30</div>
    </li>
  );
}
