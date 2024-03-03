import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const MIN_PAGE = 1;
const MIN_PAGEGROUP = 1;
const PAGE_PER_PAGEGORUP = 5;
export default function PageNation() {
  const dispatch = useDispatch();
  const dataLength = useSelector(
    (state) => state.productManagement.products?.length
  );

  const ARR_PAGE_PER_PAGEGORUP = [1, 2, 3, 4, 5];

  let viewCount = useSelector((state) => state.productManagement.viewCount);
  let maxPage = Math.ceil(dataLength / viewCount);
  let maxPageGroup = Math.ceil(maxPage / 5);
  const [pageGroup, setPageGroup] = useState(MIN_PAGEGROUP);
  const [curPage, setCurPage] = useState(
    (MIN_PAGEGROUP - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
  );

  const handlePageClick = (number) => {
    setCurPage(number);
  };

  const handlePrevPageGroupClick = () => {
    if (pageGroup === MIN_PAGEGROUP) return;

    setPageGroup((prev) => {
      let prevPageGroup = prev - 1;
      setCurPage(
        () =>
          (prevPageGroup - 1) * PAGE_PER_PAGEGORUP +
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
        () =>
          (nextPageGroup - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
      );
      return nextPageGroup;
    });
  };

  const handlePrevPageClick = () => {
    if (curPage === MIN_PAGE) return;

    let curPageGroup_firstPage =
      (pageGroup - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0];

    if (curPage === curPageGroup_firstPage) {
      handlePrevPageGroupClick();
    } else setCurPage((prev) => prev - 1);
  };

  const handleNextPageClick = () => {
    if (curPage === maxPage) return;

    let curPageGroup_lastPage =
      (pageGroup - 1) * PAGE_PER_PAGEGORUP +
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
        {ARR_PAGE_PER_PAGEGORUP.map((item, index) => {
          let page = (pageGroup - 1) * PAGE_PER_PAGEGORUP + item;
          if (page > maxPage) return;
          return (
            <Page
              page={page}
              curPage={curPage}
              handlePageClick={handlePageClick}
              key={index}
            />
          );
        })}
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

function Page({ page, curPage, handlePageClick }) {
  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer ${
        page == curPage ? "bg-blue-200 text-blue-500" : "hover:bg-gray-300"
      }`}
      onClick={() => handlePageClick(page)}
    >
      {page}
    </div>
  );
}
