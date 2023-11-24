import React from "react";
import useProducts from "../../../hooks/useProducts";
import ProductCard from "../product/ProductCard";
import { useSelector } from "react-redux";

export default function Products() {
  const currentCategory = useSelector(
    (state) => state.category.currentCategory
  );
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts(currentCategory);

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 ">
      {data &&
        data.map((product, index) => {
          if (index >= 8) return;
          return (
            <ProductCard
              product={product}
              currentCategory={currentCategory}
              key={index}
            />
          );
        })}
    </div>
  );
}
