import React from "react";

export default function SideListItem({ title, onClick }) {
  return (
    <li
      className="flex items-center h-10 mb-3 cursor-pointer transition-all -translate-x-11 hover:-translate-x-1"
      onClick={onClick}
    >
      <div className={`w-10 h-full bg-black mr-4`}></div>
      <div>{title}</div>
    </li>
  );
}
