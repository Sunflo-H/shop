import axios from "axios";
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Banner from "../components/main/Banner";
import HomeContents1 from "../components/main/HomeContents1";
import ProductCard from "../components/main/ProductCard";
import AllProduct from "./AllProduct";

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto px-10">
      <Banner />
      <HomeContents1 />
      {/* <HomeContents2 /> */}
      {/* <HomeContents3 /> */}
      {/* <HomeContents4 /> */}
      {/* <AllProduct /> */}
    </div>
  );
}
