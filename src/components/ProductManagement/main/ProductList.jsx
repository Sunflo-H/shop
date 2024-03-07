import React from "react";
import ProductListItem from "./ProductListItem";

import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const products = useSelector((state) => state.productManagement.products);
  const viewCount = useSelector((state) => state.productManagement.viewCount);
  const page = useSelector((state) => state.productManagement.currentPage);
  const pageGroup = useSelector(
    (state) => state.productManagement.currentPageGroup
  );
  let start = viewCount * (page - 1);
  let last = viewCount * page;
  let productsPerPage = products.slice(start, last);

  return (
    <div className="mt-4 bg-white">
      <div className="flex px-8 py-2 border-b border-gray-300 font-bold">
        <div className="w-20">
          <input type="checkbox" /> No
        </div>
        <div className="w-72 text-center">Title</div>
        <div className="w-28 text-center">Price</div>
        <div className="w-40 text-center">Category</div>
        <div className="w-40 text-center">Status</div>
        <div className="w-16  text-center mr-4">Stock</div>
        <div className="w-40 text-center">Registration Date</div>
        <div className="w-40 text-center">Update Date</div>
      </div>
      <div className="">
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
    </div>
  );
}
