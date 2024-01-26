import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { updateProduct } from "../../../api/firebase_db";

const PRODUCT_STATUS_FILTER = ["all", "Sale", "Sold Out", "Hide"];
export default function ProductStatus() {
  const [filter, setFilter] = useState("ALL");
  const productStatus = ["ALL", "Sale", "Sold Out", "Hide"];
  const {
    productsQuery_all: { data },
  } = useProducts(); // 0123935872394: {상품데이터} 이런 형태라서 데이터를 수정해야한다

  const accessories = data ? Object.entries(data[0]) : [];
  const men = data ? Object.entries(data[1]) : [];
  const shoes = data ? Object.entries(data[2]) : [];
  const test = data ? Object.entries(data[3]) : [];
  const women = data ? Object.entries(data[4]) : [];

  const productList = [accessories, men, shoes, women, test];

  function getLength(type) {
    let length = 0;
    if (type === "all") {
      length = data ? productList.reduce((acc, cur) => acc + cur.length, 0) : 0;
    } else {
      length = data
        ? productList.reduce((acc, productByCategory) => {
            const filteredProductList = productByCategory.filter((product) => {
              const productData = product[1];
              return productData.status === type;
            });
            return acc + filteredProductList.length;
          }, 0)
        : 0;
    }
    return length;
  }

  const handleTest = (e) => {
    // for (let i = 0; i < women.length; i++) {
    //   const [key, product] = women[i];
    //   const updatedProduct = { ...product };
    //   updatedProduct.stock = 50;
    //   updatedProduct.status = "Sale";
    //   updateProduct(key, updatedProduct);
    // }
  };

  const handleFilterClick = (status) => {
    setFilter(status);
  };

  return (
    <ul className="flex gap-4">
      {productStatus.map((status, index) => (
        <li
          className={`p-4  font-bold cursor-pointer ${
            status === filter ? "text-blue-500 border-blue-500 border-b-2" : " "
          }`}
          key={index}
          onClick={() => handleFilterClick(status)}
        >
          {status} {getLength(PRODUCT_STATUS_FILTER[index])}
        </li>
      ))}
    </ul>
  );
}
