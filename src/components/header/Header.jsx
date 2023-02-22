import React, { useContext, useEffect } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import LoginBtn from "./LoginBtn";

// FireBase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Header({ setNav }) {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

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
  const db = getFirestore(app);
  const auth = getAuth(app);
  const email = "email@gmail.com";
  const password = "123123asdasd";

  // // 신규유저
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //     // ..
  //   });

  // // 기존 사용자 로그인
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  return (
    <div className="flex w-full pt-2">
      {/* 로고 */}
      <div
        className="flex text-rose-500 cursor-pointer"
        onClick={handleLogoClick}
      >
        <RiShoppingBag3Line className="text-3xl" />
        <span className="text-2xl font-bold">Shoppy</span>
      </div>

      {/* 상품과 장바구니 */}
      <div className="flex ml-auto mr-8 pt-1">
        <div
          className=" font-bold mr-4 cursor-pointer"
          onClick={handleProductsClick}
        >
          Products
        </div>
        <div className="cursor-pointer" onClick={handleCartClick}>
          <AiOutlineShoppingCart className="text-2xl font-bold" />
        </div>
      </div>

      {/* 로그인 */}
      <div className="bg-rose-500 text-white text-lg font-bold  py-1 px-4 cursor-pointer">
        Login
      </div>
    </div>
  );
}
