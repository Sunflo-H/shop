import React from "react";

export default function Button({ onClick, animation }) {
  return (
    <div
      className={`cursor-pointer ${animation && "animate-show opacity-0"}`}
      onClick={onClick}
    >
      <span className="bg-black text-white p-4 px-8 text-sm">Shop Now</span>
      <span className="ml-0.5 pl-1 py-4 bg-black text-sm"></span>
    </div>
  );
}
