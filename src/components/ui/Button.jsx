import React from "react";

export default function Button({ text, onClick, animation, color }) {
  if (color === "white") {
    return (
      <span
        className={`cursor-pointer ${animation && "animate-show opacity-0"} `}
        onClick={onClick}
      >
        <span className="bg-black text-white p-4 px-8 text-sm border border-white">
          {text}
        </span>
        <span className="ml-0.5 pl-1 py-4 bg-black text-sm border border-white"></span>
      </span>
    );
  }
  return (
    <span
      className={`cursor-pointer ${animation && "animate-show opacity-0"}`}
      onClick={onClick}
    >
      <span className="bg-black text-white p-4 px-8 text-sm">{text}</span>
      <span className="ml-0.5 pl-1 py-4 bg-black text-sm"></span>
    </span>
  );
}
