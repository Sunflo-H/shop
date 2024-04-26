import React from "react";
import ProductListItem from "./productListUI/ProductListItem";

import { useSelector } from "react-redux";
import ProductListTitles from "./productListUI/ProductListTitles";

export default function ProductList() {
  const products_origin = useSelector(
    (state) => state.productManagement.products_origin
  );
  const products = useSelector((state) => state.productManagement.products);
  const viewCount = useSelector((state) => state.productManagement.viewCount);
  const currentPage = useSelector(
    (state) => state.productManagement.currentPage
  );
  const search = useSelector((state) => state.productManagement.search);

  console.log(currentPage);

  let start = viewCount * (currentPage - 1);
  let last = viewCount * currentPage;
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
