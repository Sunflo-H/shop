import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const location = useLocation();
  const { id, name, imageUrl, price, description, size, category } =
    location.state;

  const [isAddCart_3s, setIsAddCart_3s] = useState(false);
  const { addCartList } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddCart_3s(true);
    addCartList(location.state);

    setTimeout(() => {
      setIsAddCart_3s(false);
    }, 3000);
  };

  return (
    <div className="h-detail">
      <div className="mb-4 pl-4"> &gt; {category}</div>
      <div className="flex w-full">
        <div className="w-2/3 ">
          <img src={imageUrl} alt="" className="w-image h-image" />
        </div>
        <div className="w-1/3 pl-4 pt-4">
          <div className="text-2xl font-bold">{name}</div>
          <div className="font-bold py-2 border-b border-gray-400">
            ₩{price}
          </div>
          <div className="py-2">{description}</div>
          <form className="py-2" onSubmit={handleSubmit}>
            <div className="w-full flex">
              <label htmlFor="size" className="text-rose-500 font-bold py-2">
                옵션 :
              </label>
              <select
                name=""
                id="size"
                className="border-dashed border-rose-500 border grow ml-2 py-2 px-2 outline-none"
              >
                <option value="" defaultValue="">
                  사이즈를 선택하세요
                </option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <button className="block w-11/12 bg-red-500 my-4 m-auto py-3 text-white text-xl font-bold">
              장바구니에 추가
            </button>
            {isAddCart_3s && <div>장바구니에 추가했습니다.</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
