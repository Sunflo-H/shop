import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
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
  );
}
