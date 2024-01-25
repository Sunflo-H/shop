import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { updateProduct } from "../../../api/firebase_db";

const PRODUCT_STATUS = {
  SALE: "Sale",
  SOLD_OUT: "Sold Out",
  HIDE: "Hide",
};
export default function ProductStatus() {
  //   const [currnetProductStatus, setCurrentProductStatus] = useState("ALL");
  const productStatus = ["ALL", "Sale", "Sold Out", "Hide"];
  const {
    productsQuery_all: { data },
  } = useProducts(); // 0123935872394: {상품데이터} 이런 형태라서 데이터를 수정해야한다

  const accessories = data ? Object.entries(data[0]) : [];
  const men = data ? Object.entries(data[1]) : [];
  const shoes = data ? Object.entries(data[2]) : [];
  const test = data ? Object.entries(data[3]) : [];
  const women = data ? Object.entries(data[4]) : [];

  const productList = [accessories, men, shoes, women];

  const totalLength = data
    ? productList.reduce((acc, cur) => acc + cur.length, 0)
    : 0;

  const saleLength = data
    ? productList.reduce((acc, productByCategory) => {
        const filteredProductList = productByCategory.filter((product) => {
          const productData = product[1];
          // console.log(productData); //! status를 이제 firebase에 일일이 추가해줘야한다. ㅅㅂ status랑 stock이 없으니까 안나오지 ㅄ
          return productData.status === PRODUCT_STATUS.SALE;
        });
        // console.log(filteredProductList);
        return acc + filteredProductList;
      }, 0)
    : 0;

  // const soldOutLength =

  const handleTest = (e) => {
    for (let i = 0; i < women.length; i++) {
      const [key, product] = women[i];
      const updatedProduct = { ...product };

      updatedProduct.stock = 50;
      updatedProduct.status = "Sale";

      updateProduct(key, updatedProduct);
    }
  };

  return (
    <ul className="flex gap-4">
      {productStatus.map((item, index) => (
        <li className="p-4 border-b border-black" key={index}>
          {item} {totalLength}
        </li>
      ))}
      <div onClick={handleTest}>상품 업데이트</div>
    </ul>
  );
}
