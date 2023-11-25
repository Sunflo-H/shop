import React from "react";
import { useLocation } from "react-router-dom";
import ProductsByCategory from "../components/main/product/ProductsByCategory";
import { useEffect } from "react";

export default function Products() {
  const location = useLocation();
  const category = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return <ProductsByCategory category={category} />;
}
