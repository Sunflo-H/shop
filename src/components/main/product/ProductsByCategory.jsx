import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../../../hooks/useProducts";

export default function ProductsByCategory({ category }) {
  const {
    productsQuery: { data },
  } = useProducts(category);

  let title =
    category === "Men" || category === "Women"
      ? `SHOP ALL ${category.toUpperCase()}'S CLOTHING
      `
      : `The ${category} Shop`;

  return (
    <section className="pt-20">
      {category && (
        <h1 className="text-center text-2xl lg:text-4xl my-14">{title}</h1>
      )}
      <div
        className={`grid grid-cols-2 
        md:grid-cols-3
        max-w-screen-2xl m-auto px-10 gap-5`}
      >
        {data &&
          data.map((product, index) => {
            return (
              <ProductCard
                product={product}
                key={index}
                currentCategory={category}
              />
            );
          })}
      </div>
    </section>
  );
}
