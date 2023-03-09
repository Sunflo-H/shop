import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

export default function Slider() {
  const navigate = useNavigate();
  const [slider, setSlider] = useState(0);
  const [isAni, setIsAni] = useState(false);

  const handleBtnClick = () => {
    navigate("/products");
  };

  const handleRightClick = () => {};

  const asd = () => {
    console.log("애니메이션");
    const ani = "animate-banner-img-sm md:animate-banner-img";

    setTimeout(() => setIsAni(true), 1000);
    // setIsAni(true);
    return ani;
  };
  const sd = () => {
    console.log("애니메이션 끝");
    const ani = "";
    // setTimeout(() => setIsAni(false), 1000);
    setIsAni(false);
    return ani;
  };
  // 클릭하면 옆으로 w-slider만큼 이동해야해
  return (
    <>
      {/* 뷰어 */}
      <div className="relative bg-blue-100 items-center overflow-hidden">
        {/* 이미지들 */}
        <div className="w-slider flex translate-x-section">
          <section className="w-section relative transition-all mb-20  ">
            <div className=" max-w-screen md:max-w-banner max-h-screen md:max-h-banner bg-white overflow-hidden ">
              <div
                className={`w-screen h-screen md:w-banner md:h-banner bg-cover bg-no-repeat bg-banner1 bg-left40 lg:bg-left opacity-80 xl:opacity-100 duration-200 
                ${isAni ? () => sd() : () => asd()}`}
              ></div>
            </div>
            <div className="absolute top-48 md:top-64  left-10 xl:left-auto md:right-2 ">
              <h2 className=" text-5xl md:text-6xl  lg:text-7xl xl:text-8xl font-bold animate-banner-text opacity-0 mb-10 text-zinc-900">
                Discover
                <br />
                your new styles
              </h2>
              <Button text={"Shop Now"} onClick={handleBtnClick} animation />
            </div>
          </section>
          <section className="w-section relative transition-all mb-20   ">
            <div className=" max-w-screen md:max-w-banner max-h-screen md:max-h-banner bg-white overflow-hidden ">
              <div className="w-screen h-screen md:w-banner md:h-banner bg-cover bg-no-repeat bg-banner2 animate-banner-img-sm md:animate-banner-img bg-left40 lg:bg-left opacity-80 xl:opacity-100 duration-200"></div>
            </div>
            <div className="absolute top-48 md:top-64  left-10 xl:left-auto md:right-2 ">
              <h2 className=" text-5xl md:text-6xl  lg:text-7xl xl:text-8xl font-bold animate-banner-text opacity-0 mb-10 text-zinc-900">
                Discover
                <br />
                your new styles
              </h2>
              <Button text={"Shop Now"} onClick={handleBtnClick} animation />
            </div>
          </section>
          <section className="w-section relative transition-all mb-20   ">
            <div className=" max-w-screen md:max-w-banner max-h-screen md:max-h-banner bg-white overflow-hidden ">
              <div className="w-screen h-screen md:w-banner md:h-banner bg-cover bg-no-repeat bg-banner3 animate-banner-img-sm md:animate-banner-img bg-left40 lg:bg-left opacity-80 xl:opacity-100 duration-200"></div>
            </div>
            <div className="absolute top-48 md:top-64  left-10 xl:left-auto md:right-2 ">
              <h2 className=" text-5xl md:text-6xl  lg:text-7xl xl:text-8xl font-bold animate-banner-text opacity-0 mb-10 text-zinc-900">
                Discover
                <br />
                your new styles
              </h2>
              <Button text={"Shop Now"} onClick={handleBtnClick} animation />
            </div>
          </section>
        </div>
        <div className="absolute bottom-52 right-36">
          <button className="mr-10" onClick={() => sd()}>
            왼쪽
          </button>
          <button onClick={() => asd()}>오른쪽</button>
        </div>
      </div>
    </>
  );
}
