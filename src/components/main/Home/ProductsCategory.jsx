import React from "react";

export default function ProductsCategory({
  currentCategory,
  setCurrentCategory,
}) {
  const categoryList = ["Men", "Women", "Accessories", "Shoes"];
  return (
    <ul className="flex justify-center gap-8 mb-10">
      {categoryList.map((category, i) => (
        <CategoryItem
          category={category}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          key={i}
        />
      ))}
    </ul>
  );
}

function CategoryItem({ category, currentCategory, setCurrentCategory }) {
  return (
    <li
      className={`cursor-pointer hover:border-black border-b-2 
              ${
                currentCategory === category
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
      onClick={() => setCurrentCategory(category)}
    >
      {category}
    </li>
  );
}
