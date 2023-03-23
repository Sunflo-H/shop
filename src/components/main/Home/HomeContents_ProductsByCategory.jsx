import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import HomeProducts from "../product/HomeProducts";
import ProductsCategory from "./ProductsCategory";

export default function HomeContents_ProductsByCategory() {
  const [category, setCategory] = useState("Men");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${category}`, { state: category });
  };
  return (
    <>
      <div className="text-center mb-12">
        <p className="text-md mb-4 tracking-widest">
          <span className="font-bold mr-4">NEW</span>
          <span className="">COLLECTIONS</span>
        </p>
        <h2 className="text-5xl font-semibold">Featured Items</h2>
      </div>

      <ProductsCategory category={category} setCategory={setCategory} />

      <div className="flex justify-center  mb-14">
        <div className="md:w-2/3">
          <HomeProducts category={category} />
        </div>
      </div>

      <div className="text-center ">
        <Button text="See All" handleClick={handleClick} />
      </div>
    </>
  );
}
