import React, { useState } from "react";
import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { imageUploadAndGetUrl } from "../api/cloudinary";
import { uploadNewProduct } from "../api/firebase";

import UploadButton from "../components/ui/UploadButton";
import useProducts from "../hooks/useProducts";

export default function UploadProduct() {
  const [isUploading, setIsUploading] = useState();
  const [success, setSuccess] = useState();
  const [file, setFile] = useState();
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    size: "",
    color: "",
  });
  const { addProduct } = useProducts(product?.category);
  const inputStyle = "p-4 outline-none border border-gray-300 my-1";

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files[0]);
      return;
    }
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      const imageUrl = await imageUploadAndGetUrl(file);
      addProduct.mutate(
        { product, imageUrl },
        {
          onSuccess: () => {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
        }
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="text-center max-w-screen-2xl m-auto pt-20">
      <h2 className="text-2xl font-bold my-4">Upload New Products</h2>

      {success && <p className="my-2">✅Upload Successfully.</p>}
      {file && (
        <img
          className="w-80 h-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}

      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <div className="flex mb-4 gap-2 font-bold">
          <input
            className="hidden"
            type="radio"
            name="category"
            value="Men"
            id="Men"
            required
            onChange={handleChange}
          />
          <label
            className={`px-4 py-2 border border-gary-300 cursor-pointer ${
              product?.category === "Men" && "bg-black text-white"
            }`}
            htmlFor="Men"
          >
            Men
          </label>
          <input
            className="hidden"
            type="radio"
            name="category"
            value="Women"
            id="Women"
            onChange={handleChange}
          />
          <label
            className={`px-4 py-2 border border-gary-300 cursor-pointer ${
              product?.category === "Women" && "bg-black text-white"
            }`}
            htmlFor="Women"
          >
            Women
          </label>
          <input
            className="hidden"
            type="radio"
            name="category"
            value="Accessories"
            id="Accessories"
            onChange={handleChange}
          />
          <label
            className={`px-4 py-2 border border-gary-300 cursor-pointer ${
              product?.category === "Accessories" && "bg-black text-white"
            }`}
            htmlFor="Accessories"
          >
            Accessories
          </label>
          <input
            className="hidden"
            type="radio"
            name="category"
            value="Shoes"
            id="Shoes"
            onChange={handleChange}
          />
          <label
            className={`px-4 py-2 border border-gary-300 cursor-pointer ${
              product?.category === "Shoes" && "bg-black text-white"
            }`}
            htmlFor="Shoes"
          >
            Shoes
          </label>
        </div>

        <input
          className="px-4 pt-3.5 pb-3 outline-none border border-gray-300 my-1"
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />

        <input
          className={inputStyle}
          type="text"
          name="title"
          value={product?.title}
          placeholder="Title"
          required
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="number"
          name="price"
          value={product?.price}
          placeholder="Price"
          required
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="description"
          value={product?.description}
          placeholder="Description"
          required
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="size"
          value={product?.size}
          placeholder="Size (Separate with commas(,))"
          required
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="text"
          name="color"
          value={product?.color}
          placeholder="Colors (Separate with commas(,))"
          required
          onChange={handleChange}
        />

        <UploadButton
          text={isUploading ? "Uploading..." : "Products Upload"}
          disabled={isUploading}
        ></UploadButton>
      </form>
    </section>
  );
}
