import React, { useState } from "react";
import ProductStatus from "./ProductStatus";

export default function Main() {
  return (
    <div className="">
      <div>
        <ProductStatus />
        <div>
          <select>
            <option value="0">Show 10 items</option>
            <option value="1">Show 20 items</option>
            <option value="2">Show 30 items</option>
          </select>
        </div>
      </div>
      <div>검색창</div>
      <div>
        <div>상품 헤더</div>
        <div>상품 리스트</div>
      </div>
    </div>
  );
}
