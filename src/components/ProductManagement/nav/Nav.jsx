import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const category = ["All", "Men", "Women", "Shoes", "Accessories"];
export default function Nav() {
  const [currentCategory, setCurrentCategory] = useState(category[0]);

  const handleCategoryClick = (e, value) => {
    setCurrentCategory(value);
  };

  return (
    <div className="w-auto h-full text-lg font-bold bg-white ml-6 pb-4 ">
      <div className="flex gap-2 text-blue-500 px-8 py-4 ">
        Management <FiSettings className="self-center" />
      </div>

      <div className=" py-1">
        <div className="flex gap-1 px-3 pb-2 cursor-pointer">
          <FaCaretDown className="self-center" /> Category
        </div>
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
