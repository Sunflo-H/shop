import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { downloadProduct, getFavorites } from "../../../api/firebase";
import ProductCard from "./ProductCard";
import useProducts from "../../../hooks/useProducts";
import { useAuthContext } from "../../../context/AuthContext";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFavorites from "../../../hooks/useFavorites";

export default function ProductsByCategory({ category, count, grid_cols }) {
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts(category);

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>{error}</div>;

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
        ${grid_cols ? `md:grid-cols-${grid_cols}` : "md:grid-cols-3"} 
        max-w-screen-2xl m-auto px-10 gap-5`}
      >
        {data &&
          data.map((product, index) => {
            if (index >= count) return;
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
