import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import Category from "./Category";

const categoryList = [["ALL", "Men", "Women", "Shoes", "Accessories"]];
export default function Nav({ item }) {
  const [currentCategory, setCurrentCategory] = useState(categoryList[0][0]);

  const handleCategoryClick = (e, value) => {
    setCurrentCategory(value);
  };
  console.log(item);

  return (
    <div className="self-start text-lg font-bold bg-white mx-6 pb-4">
      <div className="flex gap-2 text-blue-500 px-8 py-4">
        Management <FiSettings className="self-center" />
      </div>
      <Category
        currentCategory={currentCategory}
        category={categoryList[0]}
        handleCategoryClick={handleCategoryClick}
      />
    </div>
  );
}
