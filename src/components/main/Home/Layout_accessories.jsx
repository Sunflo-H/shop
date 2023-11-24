import React from "react";
import Button from "../../ui/Button";
import { Navigate } from "react-router-dom";

export default function Layout_accessories() {
  const goAccessories = () => {
    Navigate("/products/Accessories", { state: "Accessories" });
  };
  return (
    <section className="relative w-full h-screen max-h-96 mb-20 bg-black">
      <div className="w-full h-full bg-cover bg-center bg-accessories opacity-70"></div>
      <div className="absolute w-full top-28 text-center ">
        <h2 className="text-6xl font-bold mb-12 text-white">
          Accessories Recommend
        </h2>
        <div>
          <Button text={"Shop Now"} color={"white"} onClick={goAccessories} />
        </div>
      </div>
    </section>
  );
}
