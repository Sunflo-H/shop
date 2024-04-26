import React from "react";
import ProductListItem from "./ProductListItem";

import { useSelector } from "react-redux";
import ProductListTitles from "./ProductListTitles";

export default function ProductList() {
  const products_origin = useSelector(
    (state) => state.productManagement.products_origin
  );
  const products = useSelector((state) => state.productManagement.products);
  const viewCount = useSelector((state) => state.productManagement.viewCount);
  const page = useSelector((state) => state.productManagement.currentPage);
  const search = useSelector((state) => state.productManagement.search);

  let start = viewCount * (page - 1);
  let last = viewCount * page;
  let productsPerPage = products.slice(start, last);

  if (search)
    productsPerPage = products_origin
      .filter((product) => product[1].title.includes(search))
      .slice(start, last);

  return (
    <div className="mt-4 bg-white">
      <ProductListTitles />
      <ul>
        {productsPerPage?.map((product_KeyValue, index) => (
          <ProductListItem
            product_KeyAndValue={product_KeyValue}
            key={index}
            index={index}
            viewCount={viewCount}
          />
        ))}
      </ul>
    </div>
  );
}
