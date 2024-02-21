import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DATA_LENGTH = 50;
const MAX_VIEW = 5;
const RANGE = [1, 2, 3, 4, 5];
let count_showItem = 10;

// 1~5
// 6~10
// 11~15
// 16~20
// 21~25

/**
 * 총 데이터는 50개라고 치자
 * page를 정해야해
 * 1,2,3,4,5 count = 0 ; count * RANGE + 1,2,3,4,5
 * 6,7,8,9,10
 * ...
 * 46,47,48,49,50
 *
 *
 *
 */

export default function PageNation() {
  const [page, setPage] = useState(0);
  const handlePageClick = () => {
    console.log("hi");
  };
  return (
    <div className="w-full border border-black flex items-center justify-center">
      <div className="flex text-2xl">
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md">
          <MdKeyboardDoubleArrowLeft />
        </div>
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md">
          <MdKeyboardArrowLeft />
        </div>
      </div>
      <div
        className="flex items-center h-10 text-center font-bold"
        onClick={handlePageClick}
      >
        {RANGE.map((item, index) => (
          <PageNumber number={page * 5 + item} />
        ))}
      </div>
      <div className="flex text-2xl">
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md">
          <MdKeyboardArrowRight />
        </div>
        <div className="px-2 py-1 hover:bg-gray-300 rounded-md">
          <MdKeyboardDoubleArrowRight />
        </div>
      </div>
    </div>
  );
}

function PageNumber({ number }) {
  return (
    <div className="px-4 py-1 hover:bg-blue-200 hover:text-blue-500 rounded-md">
      {number}
    </div>
  );
}
