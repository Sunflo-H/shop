import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { downloadProduct } from "../api/firebase";
import ProductCard from "../components/main/ProductCard";
import useProducts from "../hooks/useProducts";

export default function AllProduct() {
  // const SEC = 1000;
  // const { data, isLoading, error } = useQuery(["products"], downloadProduct, {
  //   staleTime: SEC * 60,
  // });
  const {
    productsQuery: { isLoading, error, data },
  } = useProducts();

  if (isLoading) return <div>로딩중</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid grid-cols-4 ">
      {data &&
        data.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
    </div>
  );
}
