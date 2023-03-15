import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { downloadProduct } from "../../../api/firebase";
import ProductCard from "./ProductCard";
import useProducts from "../../../hooks/useProducts";

export default function ProductsByCategory({ category }) {
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
      <h1 className="text-center text-4xl my-14">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-screen-2xl m-auto px-10 gap-5">
        {data &&
          data.map((product, index) => (
            <ProductCard product={product} key={index} index={index} />
          ))}
      </div>
    </section>
  );
}
