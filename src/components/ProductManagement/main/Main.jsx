import React, { useState } from "react";
import ProductStatus from "./ProductStatus";
import { CiSearch } from "react-icons/ci";

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
      <div className="mt-4 ">
        <div className="flex justify-between bg-white w-3/4">
          <input
            className="px-4 py-2 grow outline-none"
            type="text"
            placeholder="상품명 검색"
          />
          <CiSearch className="text-2xl self-center mr-4" />
        </div>
      </div>
      <div>
        <div>상품 헤더</div>
        <div>상품 리스트</div>
      </div>
    </div>
  );
}
