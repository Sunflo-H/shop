import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function CategoryTitle({ title, handleCollapsible, isOpen }) {
  return (
    <>
      <div className="py-1">
        <div
          className="flex gap-1 px-3 pb-2 cursor-pointer"
          onClick={handleCollapsible}
        >
          {isOpen ? (
            <FaCaretDown className="self-center" />
          ) : (
            <FaCaretUp className="self-center" />
          )}
          {title}
        </div>
      </div>
    </>
  );
}
