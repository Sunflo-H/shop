import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DATA_LENGTH = 102;
const PAGE_PER_PAGEGORUP = 5;
const ARR_PAGE_PER_PAGEGORUP = [1, 2, 3, 4, 5];
const ITEM_PER_PAGE = 5;

let minPage = 1;
let maxPage = Math.ceil(DATA_LENGTH / ITEM_PER_PAGE);
let minPageGroup = 0;
let maxPageGroup = Math.ceil(maxPage / 5);

export default function PageNation() {
  const [pageGroup, setPageGroup] = useState(minPageGroup);
  const [curPage, setCurPage] = useState(
    pageGroup * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
  );

  const handlePageClick = (number) => {
    setCurPage(number);
  };

  const handlePrevPageGroupClick = () => {
    if (pageGroup === minPageGroup) return;

    setPageGroup((prev) => {
      let prevPageGroup = prev - 1;
      setCurPage(
        () =>
          prevPageGroup * PAGE_PER_PAGEGORUP +
          ARR_PAGE_PER_PAGEGORUP[ARR_PAGE_PER_PAGEGORUP.length - 1]
      );
      return prevPageGroup;
    });
  };

  const handleNextPageGroupClick = () => {
    if (pageGroup === maxPageGroup) return;

    setPageGroup((prev) => {
      let nextPageGroup = prev + 1;
      setCurPage(
        () => nextPageGroup * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
      );
      return nextPageGroup;
    });
  };

  const handlePrevPageClick = () => {
    if (curPage === minPage) return;
    let curPageGroup_firstPage =
      pageGroup * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0];

    if (curPage === curPageGroup_firstPage) {
      handlePrevPageGroupClick();
    } else setCurPage((prev) => prev - 1);
  };

  const handleNextPageClick = () => {
    if (curPage === maxPage) return;

    let curPageGroup_lastPage =
      pageGroup * PAGE_PER_PAGEGORUP +
      ARR_PAGE_PER_PAGEGORUP[ARR_PAGE_PER_PAGEGORUP.length - 1];

    if (curPage === curPageGroup_lastPage) {
      handleNextPageGroupClick();
    } else setCurPage((prev) => prev + 1);
  };
  return (
    <div className="w-full flex items-center justify-center gap-1 mt-4 mb-2">
      <div className="flex text-2xl">
        <div
          className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer"
          onClick={handlePrevPageGroupClick}
        >
          <MdKeyboardDoubleArrowLeft />
        </div>
        <div
          className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer"
          onClick={handlePrevPageClick}
        >
          <MdKeyboardArrowLeft />
        </div>
      </div>
      <div className="flex items-center h-10 text-center font-bold gap-1">
        {ARR_PAGE_PER_PAGEGORUP.map((item, index) => (
          <Page
            number={pageGroup * PAGE_PER_PAGEGORUP + item}
            curPage={curPage}
            handlePageClick={handlePageClick}
            key={index}
          />
        ))}
      </div>
      <div className="flex text-2xl">
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer">
          <MdKeyboardArrowRight onClick={handleNextPageClick} />
        </div>
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md cursor-pointer">
          <MdKeyboardDoubleArrowRight onClick={handleNextPageGroupClick} />
        </div>
      </div>
    </div>
  );
}

function Page({ number, curPage, handlePageClick }) {
  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer ${
        number == curPage ? "bg-blue-200 text-blue-500" : "hover:bg-gray-300"
      }`}
      onClick={() => handlePageClick(number)}
    >
      {number}
    </div>
  );
}
