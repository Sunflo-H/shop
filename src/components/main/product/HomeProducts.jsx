import React from "react";
import useProducts from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function HomeProducts({ category }) {
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts(category);

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 ">
      {data &&
        data.map((product, index) => {
          if (index >= 8) return;
          return <ProductCard product={product} key={index} />;
        })}
    </div>
  );
}
