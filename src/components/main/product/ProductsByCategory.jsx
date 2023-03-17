import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { downloadProduct } from "../../../api/firebase";
import ProductCard from "./ProductCard";
import useProducts from "../../../hooks/useProducts";

export default function ProductsByCategory({ category, count, grid_cols }) {
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts(category);
  console.log(data);

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>{error}</div>;

  let title =
    category === "Men" || category === "Women"
      ? `SHOP ALL ${category.toUpperCase()}'S CLOTHING
      `
      : `The ${category} Shop`;

  return (
    <section>
      {/* //! 이 타이틀 부분은 Product 페이지에서 따로 Header 컴포넌트를 만들든 합시다. */}
      {/* <h1 className="text-center text-4xl my-14">{title}</h1> */}
      <div
        className={`grid grid-cols-2 
        ${grid_cols ? `md:grid-cols-${grid_cols}` : "md:grid-cols-3"} 
        max-w-screen-2xl m-auto px-10 gap-5`}
      >
        {data &&
          data.map((product, index) => {
            if (index >= count) return;
            return <ProductCard product={product} key={index} index={index} />;
          })}
      </div>
    </section>
  );
}
