import React, { useState } from "react";
import { imageUploadAndGetUrl } from "../api/cloudinary";
import UploadButton from "../components/ui/UploadButton";
import useProducts from "../hooks/useProducts";
import Input_Category from "../components/shop/main/UploadProduct/Input_category";
import Input_file from "../components/shop/main/UploadProduct/Input_file";
import Input_text from "../components/shop/main/UploadProduct/Input_text";
import Input_size from "../components/shop/main/UploadProduct/Input_size";
import Input_color from "../components/shop/main/UploadProduct/Input_color";

const category = ["Men", "Women", "Accessories", "Shoes", "Test"];
const productDetails = ["title", "description"];
const size = ["S", "M", "L", "XL"];
const color = ["Black", "Red", "Green", "Blue", "Yellow"];
const inputStyle = "p-4 outline-none border border-gray-300 my-1";

export default function UploadProduct() {
  const [isUploading, setIsUploading] = useState();
  const [success, setSuccess] = useState();
  const [file, setFile] = useState();
  const [product, setProduct] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    stock: "",
    size: [],
    color: [],
  });
  const { uploadProduct } = useProducts(product?.category);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFile(files[0]);
      return;
    }
    setProduct({ ...product, [name]: value });
  };

  const handleUploadProduct = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    console.log(product);
    try {
      const imageUrl = await imageUploadAndGetUrl(file);
      uploadProduct.mutate(
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

      <form className="flex flex-col px-12" onSubmit={handleUploadProduct}>
        <div className="flex mb-4 gap-2 font-bold">
          {category.map((item) => {
            return (
              <Input_Category
                category={item}
                product={product}
                setProduct={setProduct}
                key={item}
              />
            );
          })}
        </div>
        {/* <div className="flex mb-4 gap-2 font-bold">
          {size.map((item) => (
            <Input_size size={item} setProduct={setProduct} key={item} />
          ))}
        </div>
        <div className="flex mb-4 gap-2 font-bold">
          {color.map((item) => (
            <Input_color color={item} setProduct={setProduct} key={item} />
          ))}
        </div> */}

        <Input_file handleChange={handleChange} />

        {productDetails.map((item) => {
          return (
            <Input_text
              attribute={item}
              value={product[item]}
              handleChange={handleChange}
              key={item}
            />
          );
        })}
        <input
          className={inputStyle}
          type="number"
          name="price"
          value={product?.price}
          placeholder="price"
          required
          onChange={handleChange}
        />
        <input
          className={inputStyle}
          type="number"
          name="stock"
          value={product?.stock}
          placeholder="Stock"
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
