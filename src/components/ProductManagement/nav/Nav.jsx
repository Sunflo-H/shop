import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import CategoryTitle from "./CategoryTitle";

const category = ["All", "Men", "Women", "Shoes", "Accessories"];
export default function Nav() {
  const [currentCategory, setCurrentCategory] = useState(category[0]);
  const [isOpen, setIsOpen] = useState(true);

  const handleCategoryClick = (e, value) => {
    setCurrentCategory(value);
  };
  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-auto h-full text-lg font-bold bg-white ml-6 pb-4">
      <div className="flex gap-2 text-blue-500 px-8 py-4">
        Management <FiSettings className="self-center" />
      </div>
      <CategoryTitle
        title={"Category"}
        handleCollapsible={handleCollapsible}
        isOpen={isOpen}
      />
      <div className={`${isOpen ? "" : "max-h-0"} overflow-hidden`}>
        {category.map((item, index) => (
          <CategoryItem
            value={item}
            currentCategory={currentCategory}
            handleCategoryClick={handleCategoryClick}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryItem({ value, currentCategory, handleCategoryClick }) {
  const activeCategoryStyle = `text-blue-600 bg-blue-100`;
  return (
    <div
      className={`pl-12 py-2 cursor-pointer hover:bg-blue-50 ${
        currentCategory === value ? activeCategoryStyle : ""
      } `}
      onClick={(e) => handleCategoryClick(e, value)}
    >
      {value}
    </div>
  );
}
