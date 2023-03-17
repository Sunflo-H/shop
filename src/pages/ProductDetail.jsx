import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { uploadCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const { addCart } = useCart();
  const {
    product: { id, title, imageUrl, price, description, size, color, category },
  } = useLocation().state;

  const [selected, setSelected] = useState(size[0]);

  const [isAddCart_3s, setIsAddCart_3s] = useState(false);

  const handleClick = (e) => {
    const product = {
      id,
      title,
      imageUrl,
      price,
      size: selected, // 얘랑
      quantity: 1, // 얘땜에 내부변수 product가 필요
    };

    addCart.mutate({ product, uid });

    setIsAddCart_3s(true);

    setTimeout(() => {
      setIsAddCart_3s(false);
    }, 3000);
  };

  const handleChange = (e) => setSelected(e.target.value);

  return (
    <section>
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
            <div className="w-full flex">
              <label htmlFor="size" className="text-rose-500 font-bold py-2">
                옵션 :
              </label>
              <select
                className="border-dashed border-rose-500 border grow ml-2 py-2 px-2 outline-none"
                id="size"
                value={selected}
                onChange={handleChange}
              >
                {size &&
                  size.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
              </select>
            </div>
            <button
              className="block w-11/12 bg-red-500 my-4 m-auto py-3 text-white text-xl font-bold"
              onClick={handleClick}
            >
              장바구니에 추가
            </button>
            {isAddCart_3s && <div>장바구니에 추가했습니다.</div>}
          </div>
        </div>
      </section>
    </section>
  );
}
