import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/main/product/ProductCard";

export default function Products() {
  const { state: category } = useLocation();
  const {
    productsQuery: { data },
  } = useProducts(category);
  const title = getTitle(category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

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

/**
 * category 값에 따라 제목을 반환하는 함수
 * @returns title
 */
function getTitle(category) {
  return category === "Men" || category === "Women"
    ? `SHOP ALL ${category.toUpperCase()}'S CLOTHING
      `
    : `The ${category} Shop`;
}
