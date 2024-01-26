import React, { useState } from "react";
import ProductStatus from "./ProductStatus";

export default function Main() {
  return (
    <div className="grow">
      <div className="flex border-gray-300 border-b ">
        <ProductStatus />
        <div>
          <select>
            <option value="0">Show 10 items</option>
            <option value="1">Show 20 items</option>
            <option value="2">Show 30 items</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <input className="px-4 py-2" type="text" placeholder="상품명 검색" />
      </div>
      <div>
        <div>상품 헤더</div>
        <div>상품 리스트</div>
      </div>
    </div>
  );
}
