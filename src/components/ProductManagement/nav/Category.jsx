import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import CategoryTitle from "./CategoryTitle";
import { useSelector } from "react-redux";

export default function Nav_category() {
  const [isOpen, setIsOpen] = useState(true);
  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };
  const categoryList = useSelector(
    (state) => state.productManagement.categoryList
  );
  // const [currentCategory, setCurrentCategory] = useState(categoryList[0][0]);

  // const handleCategoryClick = (e, value) => {
  //   setCurrentCategory(value);
  // };
  return (
    <>
      <CategoryTitle
        title={"Category"}
        handleCollapsible={handleCollapsible}
        isOpen={isOpen}
      />

      <div
        className={`${
          isOpen ? " max-h-96" : "max-h-0"
        } overflow-hidden duration-200 `}
      >
        {categoryList.map((item, index) => (
          <CategoryItem
            value={item}
            // currentCategory={currentCategory}
            // handleCategoryClick={handleCategoryClick}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
