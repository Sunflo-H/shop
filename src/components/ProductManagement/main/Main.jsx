import React from "react";
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
      <div className="mt-4 border ">
        <div className="flex justify-between bg-white">
          <input
            className="px-6 py-3 grow outline-none"
            type="text"
            placeholder="상품명 검색"
          />
          <CiSearch className="text-2xl self-center mr-4" />
        </div>
      </div>
      <div className="mt-4 bg-white">
        <div className="px-8 py-2 border-b border-gray-300  flex font-bold">
          <div className="w-16 border border-black">
            <input type="checkbox" /> No
          </div>
          <div className="w-96 border border-black">상품명</div>
          <div className="w-36 border border-black">판매가</div>
          <div className="w-48 border border-black">카테고리</div>
          <div className="w-40 border border-black">상태</div>
          <div className="w-20 border border-black">재고</div>
          <div className="w-48 border border-black">등록일</div>
        </div>
        <div className="">
          <ul>
            <li className="flex justify-around">
              <div className="flex">
                <input type="checkbox" /> <p className="pl-2 text-end">999</p>
              </div>
              <div>상품명</div>
              <div>판매가</div>
              <div>카테고리</div>
              <div>상태</div>
              <div>재고</div>
            </li>
            <li className="flex justify-around">
              <div className="flex">
                <input type="checkbox" /> <p className="pl-2 text-end">9</p>
              </div>
              <div>상품명</div>
              <div>판매가</div>
              <div>카테고리</div>
              <div>상태</div>
              <div>재고</div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
