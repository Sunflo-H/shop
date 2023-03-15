import React from "react";
import { useLocation } from "react-router-dom";
import ProductsByCategory from "../components/main/product/ProductsByCategory";

export default function Products() {
  const location = useLocation();
  const category = location.state;

  return <ProductsByCategory category={category} />;
}
