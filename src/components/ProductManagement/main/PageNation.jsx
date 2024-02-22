import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DATA_LENGTH = 52;
const PAGE_PER_PAGEGORUP = 5;
const ARR_PAGE_PER_PAGEGORUP = [1, 2, 3, 4, 5];
const ITEM_PER_PAGE = 15;

let minPageGroup = 1;
let maxPageGroup = Math.floor(DATA_LENGTH / ITEM_PER_PAGE);
let minPage = 1;
let maxPage = Math.ceil(DATA_LENGTH / ITEM_PER_PAGE);

console.log(maxPageGroup);
console.log(maxPage);

export default function PageNation() {
  const [pageGroup, setPageGroup] = useState(0);
  const [curPage, setCurPage] = useState(
    pageGroup * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
  );
  const handleNumberClick = (number) => {
    setCurPage(number);
  };
  const handlePagePrevMoveClick = () => {
    if (pageGroup !== 0) setPageGroup((prev) => prev - 1);
  };
  const handleNumberPrevMoveClick = () => {
    if (curPage !== 1) setCurPage((prev) => prev - 1);
  };
  const handlePageNextMoveClick = () => {
    if (pageGroup !== maxPageGroup) setPageGroup((prev) => prev + 1);
  };
  const handleNumberNextMoveClick = () => {
    if (curPage !== 1) setCurPage((prev) => prev + 1);
  };
  return (
    <div className="w-full flex items-center justify-center gap-1 mt-4">
      <div className="flex text-2xl">
        <div
          className="px-2 py-1 hover:bg-gray-300 rounded-md"
          onClick={handlePagePrevMoveClick}
        >
          <MdKeyboardDoubleArrowLeft />
        </div>
        <div
          className="px-2 py-1 hover:bg-gray-300 rounded-md"
          onClick={handleNumberPrevMoveClick}
        >
          <MdKeyboardArrowLeft />
        </div>
      </div>
      <div className="flex items-center h-10 text-center font-bold gap-1">
        {ARR_PAGE_PER_PAGEGORUP.map((item, index) => (
          <PageNumber
            number={pageGroup * PAGE_PER_PAGEGORUP + item}
            curPage={curPage}
            handleNumberClick={handleNumberClick}
            key={index}
          />
        ))}
      </div>
      <div className="flex text-2xl">
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md">
          <MdKeyboardArrowRight onClick={handleNumberNextMoveClick} />
        </div>
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md">
          <MdKeyboardDoubleArrowRight onClick={handlePageNextMoveClick} />
        </div>
      </div>
    </div>
  );
}

function PageNumber({ number, curPage, handleNumberClick }) {
  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer ${
        number == curPage ? "bg-blue-200 text-blue-500" : "hover:bg-gray-300"
      }`}
      onClick={() => handleNumberClick(number)}
    >
      {number}
    </div>
  );
}
