import React, { useEffect, useRef, useState } from "react";
import Firebase from "../firebase/app";

export default function ProductRegistration() {
  const firebase = new Firebase();

  const [inputs, setInputs] = useState({
    imageUrl: "",
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "imageUrl") {
      const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;
      const files = e.target.files;
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
        formData.append("file", file);
        formData.append(
          "upload_preset",
          process.env.REACT_APP_CLOUDINARY_PRESET
        );
        console.log(process.env.REACT_APP_CLOUDINARY_PRESET);
        console.log(process.env.REACT_APP_CLOUDINARY_API_KEY);
        console.log(process.env.REACT_APP_CLOUDINARY_NAME);
        // formData.append("upload_preset", "epphrehr");

        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            console.log(data);
          });
      }
    }

    setInputs({ ...inputs, [name]: value });
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

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

    firebase.writeProductData(1, imageUrl, name, price, category, description);
  };

  return (
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
  );
}

{
  /* <div className="border p-3 mb-3">
          <select>
            <option value="">성별</option>
            <option value="남성">남성</option>
            <option value="여성">여성</option>
          </select>
          <input type="radio" id="apple" name="fruit" value="apple" />
          <label htmlFor="apple">사과</label>
          <input type="radio" id="banana" name="fruit" value="banana" />
          <label htmlFor="banana">바나나</label>
        </div> */
}
