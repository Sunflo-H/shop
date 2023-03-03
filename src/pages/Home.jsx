import axios from "axios";
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ProductCard from "../components/main/ProductCard";
import AllProduct from "./AllProduct";

export default function Home() {
  // const { data, isLoading, error } = useQuery(
  //   ["products", "product"],
  //   downloadProduct
  // );

  // if (isLoading) return <div>로딩중</div>;
  // if (error) return <div>{error}</div>;
  return (
    <>
      <div>
        <img className="w-11/12" src="/image/jumbo.jpg" alt="" />
      </div>
      <AllProduct />
    </>
  );
}

async function fetchProductData({ queryKey }) {
  const { data } = await axios.get("/data/product.json");
  return data;
}
