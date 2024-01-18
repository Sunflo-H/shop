import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";

export default function ProductStatus() {
  //   const [currnetProductStatus, setCurrentProductStatus] = useState("ALL");
  const productStatus = ["ALL", "Sale", "Sold Out", "Hide"];
  const {
    productsQuery_all: { data },
  } = useProducts(); // 0123935872394: {상품데이터} 이런 형태라서 데이터를 수정해야한다

  // const productList = data ? data.map
  console.log(data);
  // useEffect(() => {
  //   productList = [...data];
  //   console.log(productList);
  // }, [data]);

  //   const m = data[1];
  //   const s = data[2];
  //   const w = data[3];

  return (
    <ul className="flex gap-4">
      {productStatus.map((item, index) => (
        <li className="p-4 border-b border-black" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
