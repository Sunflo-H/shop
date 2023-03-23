import React from "react";

export default function ProductsCategory({ category, setCategory }) {
  return (
    <ul className="flex justify-center gap-8 mb-10">
      <li
        className={`cursor-pointer hover:border-black border-b-2 
              ${
                category === "Men"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
        onClick={() => setCategory("Men")}
      >
        Men
      </li>
      <li
        className={`cursor-pointer hover:border-black border-b-2 "
              ${
                category === "Women"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
        onClick={() => setCategory("Women")}
      >
        Women
      </li>
      <li
        className={`cursor-pointer hover:border-black border-b-2 
              ${
                category === "Accessories"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
        onClick={() => setCategory("Accessories")}
      >
        Accessories
      </li>
      <li
        className={`cursor-pointer hover:border-black border-b-2 
              ${
                category === "Shoes"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
        onClick={() => setCategory("Shoes")}
      >
        Shoes
      </li>
    </ul>
  );
}
