import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
import CategoryTitle from "./CategoryTitle";

export default function Nav_category({
  currentCategory,
  category,
  handleCategoryClick,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const handleCollapsible = () => {
    setIsOpen((prev) => !prev);
  };
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
        } overflow-hidden duration-300 `}
      >
        {category.map((item, index) => (
          <CategoryItem
            value={item}
            currentCategory={currentCategory}
            handleCategoryClick={handleCategoryClick}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
