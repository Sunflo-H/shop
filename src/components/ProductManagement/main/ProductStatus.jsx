import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";

export default function ProductStatus() {
  //   const [currnetProductStatus, setCurrentProductStatus] = useState("ALL");
  const productStatus = ["ALL", "Sale", "Sold Out", "Hide"];
  const {
    productsQuery_all: { data },
  } = useProducts(); // 0123935872394: {상품데이터} 이런 형태라서 데이터를 수정해야한다

  const accessories = data ? Object.entries(data[0]) : [];
  const men = data ? Object.entries(data[1]) : [];
  const shoes = data ? Object.entries(data[2]) : [];
  const women = data ? Object.entries(data[3]) : [];

  const totalLength =
    accessories.length + men.length + shoes.length + women.length;

  const saleLength = accessories.filter((item) => {
    const product = item[1];
    console.log(product);
  });
  console.log(saleLength);

  // const soldOutLength =

  return (
    <ul className="flex gap-4">
      {productStatus.map((item, index) => (
        <li className="p-4 border-b border-black" key={index}>
          {item} {totalLength}
        </li>
      ))}
    </ul>
  );
}
