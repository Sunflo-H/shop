import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setCurrentPageGroup,
} from "../../../slice/productManagementSlice";

const MIN_PAGE = 1;
const MIN_PAGEGROUP = 1;
const PAGE_PER_PAGEGORUP = 5;
const ARR_PAGE_PER_PAGEGORUP = [1, 2, 3, 4, 5];
export default function PageNation() {
  const dispatch = useDispatch();
  // const dataLength = 100;
  const dataLength = useSelector(
    (state) => state.productManagement.products?.length
  );

  let viewCount = useSelector((state) => state.productManagement.viewCount);
  let maxPage = Math.ceil(dataLength / viewCount);
  let maxPageGroup = Math.ceil(maxPage / 5);
  const currentPage = useSelector(
    (state) => state.productManagement.currentPage
  );
  const currentPageGroup = useSelector(
    (state) => state.productManagement.currentPageGroup
  );

  //! 지금 페이지네이션의 curPage를 slice로 적용을 해봤어
  //! 근데!!! 페이지네이션의 상태값들을 다른데서 사용하나?
  //! 페이지네이션에 slice가 굳이 필요한가? products를 받아와서..
  //* 아 필요하다 현재 페이지값이 있어야 productList에서 currentPage값으로 products를 필터링하지
  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePrevPageGroupClick = () => {
    if (currentPageGroup === MIN_PAGEGROUP) return;

    let prevPageGroup = currentPageGroup - 1;

    dispatch(setCurrentPageGroup(prevPageGroup));
    dispatch(
      setCurrentPage(
        (prevPageGroup - 1) * PAGE_PER_PAGEGORUP +
          ARR_PAGE_PER_PAGEGORUP[ARR_PAGE_PER_PAGEGORUP.length - 1]
      )
    );
  };

  const handleNextPageGroupClick = () => {
    if (currentPageGroup === maxPageGroup) return;

    let nextPageGroup = currentPageGroup + 1;

    dispatch(setCurrentPageGroup(nextPageGroup));
    dispatch(
      setCurrentPage(
        (nextPageGroup - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0]
      )
    );
  };

  const handlePrevPageClick = () => {
    if (currentPage === MIN_PAGE) return;

    let firstPageInPageGroup =
      (currentPageGroup - 1) * PAGE_PER_PAGEGORUP + ARR_PAGE_PER_PAGEGORUP[0];

    if (currentPage === firstPageInPageGroup) handlePrevPageGroupClick();
    else dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextPageClick = () => {
    if (currentPage === maxPage) return;

    let lastPageInPageGroup =
      (currentPageGroup - 1) * PAGE_PER_PAGEGORUP +
      ARR_PAGE_PER_PAGEGORUP[ARR_PAGE_PER_PAGEGORUP.length - 1];

    if (currentPage === lastPageInPageGroup) handleNextPageGroupClick();
    else dispatch(setCurrentPage(currentPage + 1));
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
          let page = (currentPageGroup - 1) * PAGE_PER_PAGEGORUP + item;
          if (page > maxPage) return;
          return (
            <Page
              page={page}
              currentPage={currentPage}
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

function Page({ page, currentPage, handlePageClick }) {
  return (
    <div
      className={`px-4 py-1 rounded-md cursor-pointer ${
        page == currentPage ? "bg-blue-200 text-blue-500" : "hover:bg-gray-300"
      }`}
      onClick={() => handlePageClick(page)}
    >
      {page}
    </div>
  );
}
