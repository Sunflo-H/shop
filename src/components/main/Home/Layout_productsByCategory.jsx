import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsCategory from "./ProductsCategory";
import HomeProducts from "../product/HomeProducts";
import Button from "../../ui/Button";

export default function Layout_productsByCategory() {
  const [currentCategory, setCurrentCategory] = useState("Men");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${currentCategory}`, { state: currentCategory });
  };
  return (
    <section className="w-full flex flex-col m-auto mb-20 ">
      <div className="text-center mb-12">
        <p className="text-md mb-4 tracking-widest">
          <span className="font-bold mr-4">NEW</span>
          <span className="">COLLECTIONS</span>
        </p>
        <h2 className="text-5xl font-semibold">Featured Items</h2>
      </div>

      <ProductsCategory
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />

      <div className="flex justify-center  mb-14">
        <div className="md:w-2/3">
          <HomeProducts category={currentCategory} />
        </div>
      </div>

      <div className="text-center ">
        <Button text="See All" onClick={handleClick} />
      </div>
    </section>
  );
}
