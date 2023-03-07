import React from "react";
import useProducts from "../../../hooks/useProducts";
import ProductCard from "./ProductCard";

export default function NewProducts() {
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts();

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 ">
      {data &&
        data.map((product, index) => {
          if (index >= 4) return;
          return <ProductCard product={product} key={index} />;
        })}
    </div>
  );
}
