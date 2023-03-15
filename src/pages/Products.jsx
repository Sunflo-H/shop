import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/main/product/ProductCard";
import ProductsByCategory from "../components/main/product/ProductsByCategory";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const location = useLocation();
  const category = location.state;

  return <ProductsByCategory category={category} />;
}
