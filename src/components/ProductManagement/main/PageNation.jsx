import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DATA_LENGTH = 50;
let page = 1;
let count_showItem = 10;

// 1~5
// 6~10
// 11~15
// 16~20
// 21~25

export default function PageNation() {
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
      <div className="flex items-center h-10 text-center  font-bold">
        <div className="px-4 py-1 hover:bg-blue-200 hover:text-blue-500 rounded-md">
          1
        </div>
        <div className="px-4  py-1 hover:bg-blue-200 rounded-md ">2</div>
        <div className="px-4  py-1 hover:bg-blue-200 rounded-md ">3</div>
        <div className="px-4  py-1  hover:bg-blue-200 rounded-md">4</div>
        <div className="px-4  py-1 hover:bg-blue-200 rounded-md ">5</div>
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
