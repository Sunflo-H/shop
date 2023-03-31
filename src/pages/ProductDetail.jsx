import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
    <section className="px-20">
      <div className="my-4 pl-4"> &gt; {category}</div>
      <section className="flex flex-col lg:flex-row w-full">
        <div className="w-full basis-7/12">
          <img src={imageUrl} alt="" className="w-full" />
        </div>
        <div className="w-full basis-5/12 pl-4 pt-4">
          <div className="text-2xl font-bold">{title}</div>
          <div className="font-bold py-2 border-b border-gray-400">
            ₩{price}
          </div>
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
              className="block w-11/12 bg-black my-4 m-auto py-3 text-white text-xl font-bold"
              onClick={handleClick}
            >
              Add Cart
            </button>
            {isAddCart_3s && <div>Added Cart </div>}
          </div>
        </div>
      </section>
    </section>
  );
}
