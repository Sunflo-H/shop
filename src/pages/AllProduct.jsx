import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../components/main/ProductCard";

export default function AllProduct() {
  const { data, isLoading, error } = useQuery(
    ["products", "product"],
    fetchProductData
  );

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

async function fetchProductData({ queryKey }) {
  const { data } = await axios.get("/data/product.json");
  return data;
}
