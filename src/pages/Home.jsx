import { initializeApp } from "firebase/app";
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/main/ProductCard";

export default function Home() {
  let [data, setData] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyA2j29NglIjYUeKh_hnOABuRAIyvXYShjg",
    authDomain: "shop-cc77d.firebaseapp.com",
    databaseURL:
      "https://shop-cc77d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shop-cc77d",
    storageBucket: "shop-cc77d.appspot.com",
    messagingSenderId: "960255437665",
    appId: "1:960255437665:web:fd341b2e3ac603b2c53320",
    measurementId: "G-W4WHT0MQ5N",
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const productRef = ref(database, "products/");

  useEffect(() => {
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="grid grid-cols-4 ">
      {data.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}
