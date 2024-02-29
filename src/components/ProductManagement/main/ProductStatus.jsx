import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import { updateProduct } from "../../../api/firebase_db";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  filterByStatus,
} from "../../../slice/productManagementSlice";

export default function ProductStatus() {
  const dispatch = useDispatch();
  const currentStatus = useSelector(
    (state) => state.productManagement.currentStatus
  );
  const products = useSelector(
    (state) => state.productManagement.products_origin
  );
  const statusList = useSelector((state) => state.productManagement.statusList);

  function productCountByStatus(type) {
    let count = 0;
    if (type === "ALL") {
      count = products.length;
    } else {
      count = products.filter((product) => product[1].status === type).length;
    }
    return count;
  }

  return (
    <ul className="flex gap-4">
      {statusList.map((status, index) => (
        <li
          className={`p-4 pt-0 pb-2  font-bold cursor-pointer ${
            status === currentStatus &&
            "text-blue-500 border-blue-500 border-b-2"
          }`}
          key={index}
          onClick={() => dispatch(filterByStatus(status))}
        >
          {status} {productCountByStatus(status)}
        </li>
      ))}
    </ul>
  );
}

const 업데이트코드 = (e) => {
  // let date = format(new Date(), "yyyy-MM-dd"); //=> '2014-01-11'
  // for (let i = 0; i < women.length; i++) {
  //   const [key, product] = women[i];
  //   const updatedProduct = { ...product };
  //   updatedProduct.registrationDate = date;
  //   updatedProduct.updateDate = date;
  //   updateProduct(key, updatedProduct);
  // }
  {
    /* <div onClick={handleTest}>업데이트!</div> */
  }
};
