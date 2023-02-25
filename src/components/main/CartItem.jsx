import React from "react";

export default function CartItem({ product }) {
  const { id, name, imageUrl, price, description, size, category } = product;
  return (
    <div className="flex my-2">
      <div className="w-40">
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <div>
          <div>{name}</div>
          <div>M</div>
          <div>₩{price}</div>
        </div>
      </div>
      <div>상품 개수 증감, 삭제 버튼</div>
    </div>
  );
}
