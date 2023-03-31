import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { uploadCart } from "../api/firebase";
import Option_color from "../components/main/product/Option_color";
import Option_size from "../components/main/product/Option_size";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const { addCart } = useCart();
  const {
    product: { id, title, imageUrl, price, description, size, color, category },
  } = useLocation().state;

  const [isAddCart_3s, setIsAddCart_3s] = useState(false);

  const [currentSize, setCurrentSize] = useState("S");
  const [currentColor, setCurrentColor] = useState("Black");

  const handleClick = (e) => {
    const product = {
      id,
      title,
      imageUrl,
      price,
      size: currentSize, // 얘랑
      color: currentColor, // 얘랑
      quantity: 1, // 얘땜에 내부변수 product가 필요
    };

    addCart.mutate({ product, uid });

    setIsAddCart_3s(true);

    setTimeout(() => {
      setIsAddCart_3s(false);
    }, 3000);
  };

  const handleSizeChange = (e) => {
    setCurrentSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  return (
    <section className=" px-4 md:px-20 ">
      <div
        className="flex flex-col lg:flex-row w-full justify-center m-auto max-w-screen-2xl 
                      gap-0 md:gap-20 "
      >
        <div className="w-full basis-5/12">
          <div className="text-xl ml-2 mb-4">
            <Link to="/"> Home </Link> /{" "}
            <Link to={`/products/${category}`} state={category}>
              {category}
            </Link>
          </div>
          <img src={imageUrl} alt="" className="w-full" />
        </div>
        <div className="w-full basis-5/12 pt-14 ">
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-bold py-2 text-xl">$ {price}</div>
          <div className="py-2">{description}</div>
          <div className="py-2">
            <div className="w-full ">
              <Option_size
                sizeList={size}
                currentSize={currentSize}
                onChange={handleSizeChange}
              />
              <Option_color
                colorList={color}
                currentColor={currentColor}
                onChange={handleColorChange}
              />
            </div>
            <button
              className="block w-full bg-black my-10 m-auto py-3 text-white text-xl font-bold"
              onClick={handleClick}
            >
              Add Cart
            </button>
            {isAddCart_3s && <div>Added Cart </div>}
          </div>
        </div>
      </div>
    </section>
  );
}
