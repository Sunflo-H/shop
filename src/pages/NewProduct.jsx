import React, { useContext, useEffect, useRef, useState } from "react";
import Cloudinary from "../cloudinary/app";
import { UserContext } from "../context/UserContext";
import Firebase from "../firebase/app";
import { Navigate } from "react-router-dom";

export default function NewProduct() {
  const firebase = new Firebase();

  const [inputs, setInputs] = useState({
    imageUrl: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const { isAdmin } = useContext(UserContext);

  useEffect(() => {
    console.log(isAdmin);
  }, [isAdmin]);

  const imageRef = useRef();

  const cloudinary = new Cloudinary();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleButtonClick = (e) => {
    const { imageUrl, name, price, category, description } = inputs;
    if (
      imageUrl === "" ||
      name === "" ||
      price === "" ||
      category === "" ||
      description === ""
    ) {
      alert("비어있는 곳이 있습니다. 다시 입력해주세요");
      return;
    }

    cloudinary.uploadFile(imageRef.current.files);

    firebase.writeProductData(
      10,
      10,
      imageUrl,
      name,
      price,
      category,
      description
    );
  };

  return (
    <>
      {isAdmin ? (
        <div>
          <div className="text-2xl font-bold text-center my-4 ">
            새로운 제품 등록
          </div>
          <form>
            <div className="border p-3 mb-3">
              <input
                type="file"
                name="imageUrl"
                accept="image/"
                value={inputs.imageUrl}
                ref={imageRef}
                onChange={handleChange}
              />
            </div>
            <div className="border p-3 mb-3">
              <input
                className="w-full outline-none"
                type="text"
                name="name"
                id=""
                placeholder="제품명"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div className="border p-3 mb-3">
              <input
                className="w-full outline-none"
                type="text"
                name="price"
                id=""
                placeholder="가격"
                value={inputs.price}
                onChange={handleChange}
              />
            </div>
            <div className="border p-3 mb-3">
              <input
                className="w-full outline-none"
                type="text"
                name="category"
                id=""
                placeholder="카테고리"
                value={inputs.category}
                onChange={handleChange}
              />
            </div>

            <div className="border p-3 mb-3">
              <input
                className="w-full outline-none"
                type="text"
                name="description"
                id=""
                placeholder="제품 설명"
                value={inputs.description}
                onChange={handleChange}
              />
            </div>
            <div
              className="px-4 py-2 bg-rose-500 text-white font-bold text-center cursor-pointer"
              onClick={handleButtonClick}
            >
              제품 등록하기
            </div>
          </form>
        </div>
      ) : (
        <>
          {setTimeout(() => {
            return <Navigate to="/" />;
          }, 0)}
        </>
      )}
    </>
  );
}
