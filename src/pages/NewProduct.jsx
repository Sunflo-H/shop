import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { imageUploadAndGetUrl } from "../api/cloudinary";
import { uploadNewProduct } from "../api/firebase";

import Button from "../components/ui/Button";

export default function NewProduct() {
  const [isUploading, setIsUploading] = useState();
  const [success, setSuccess] = useState();
  const [file, setFile] = useState();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    options: "",
  });

  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ product, imageUrl }) => uploadNewProduct(product, imageUrl),
    {
      onMutate: (variable) => {
        console.log("onMutate", variable);
      },
      onError: (error, variable, context) => {
        // error
      },
      onSuccess: (data, variables, context) => {
        console.log("success", data, variables, context);
        queryClient.invalidateQueries(["products"]);
      },
      onSettled: () => {
        console.log("end");
      },
    }
  );

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
      mutation.mutate(
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

    // uploadNewProduct(product, imageUrl) // 상품이 업데이트되는 부분
    //   .then(() => {
    //     setSuccess(true);
    //     setTimeout(() => {
    //       setSuccess(false);
    //     }, 3000);
    //   })
    //   .finally(() => setIsUploading(false));
  };

  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {success && <p className="my-2">✅성공적으로 등록했습니다.</p>}
      {file && (
        <img
          className="w-80 h-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product?.title}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product?.price}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product?.category}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product?.description}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product?.options}
          placeholder="옵션들 (콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? "업로드중..." : "제품등록"}
          disabled={isUploading}
        ></Button>
      </form>
    </section>
  );
}
