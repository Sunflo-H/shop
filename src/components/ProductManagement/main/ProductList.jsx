import React from "react";
import ProductStatus from "./ProductStatus";
import { CiSearch } from "react-icons/ci";
import useProducts from "../../../hooks/useProducts";
import ProductListItem from "./ProductListItem";

import { format } from "date-fns";
import { useSelector } from "react-redux";

const viewCount = 10;
export default function ProductList() {
  const a = useSelector((state) => state.product);
  // console.log(a);
  const {
    productsQuery_all: { data },
  } = useProducts();

  const accessories = data ? Object.entries(data[0]) : []; // [[key,value],[key,value]] 형태
  const men = data ? Object.entries(data[1]) : [];
  const shoes = data ? Object.entries(data[2]) : [];
  const test = data ? Object.entries(data[3]) : [];
  const women = data ? Object.entries(data[4]) : [];

  const productList_keyAndValue = [
    ...accessories,
    ...men,
    ...shoes,
    ...women,
    ...test,
  ];
  // console.log(productList_keyAndValue);

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
          {productList_keyAndValue.map((product_KeyAndValue, index) => (
            <ProductListItem
              product_KeyAndValue={product_KeyAndValue}
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
