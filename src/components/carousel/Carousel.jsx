import React, { useEffect, useState } from "react";

import Images from "./Images";
import NextImage from "./NextImage";
import PrevImage from "./PrevImage";

const IMAGE_DURATION = 1000;
const FIRST_SLIDER_NUM = 1;
const LAST_SLIDER_NUM = 3;

export default function Slider() {
  const [isTextAni, setIsTextAni] = useState(false);
  const [slider, setSlider] = useState(1);
  const [isTransition, setIsTransition] = useState(true);
  const [isBtnActive, setIsBtnActive] = useState(true);

  /**
   * 이미지에는 기본적으로 transition이 있다 (1초)
   * 이동하라는 명령을 하면 1초동안 해당위치로 이동한다
   *
   * 근데 버튼을 계속 누르면 silder의 값이 바뀌어버린다.
   * 버튼이 1초동안 안눌리게 해야해
   *
   *
   */

  const handlePrev = () => {
    if (!isBtnActive) return;

    setSlider((v) => v - 1);
    // textAniController();
    setIsBtnActive(false);
    setTimeout(() => setIsBtnActive(true), IMAGE_DURATION);
  };

  const handleNext = () => {
    if (!isBtnActive) return;

    setSlider((v) => v + 1);
    // textAniController();
    setIsBtnActive(false);
    setTimeout(() => setIsBtnActive(true), IMAGE_DURATION);
  };

  const textAniController = () => {
    setIsTextAni(false);
    setTimeout(() => setIsTextAni(true), IMAGE_DURATION); // 애니메이션 시간 후 상태 초기화
  };

  useEffect(() => {
    // setIsTextAni(true);
  }, []);

  useEffect(() => {
    if (slider === 4) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(FIRST_SLIDER_NUM);
      }, IMAGE_DURATION);

      setTimeout(() => {
        setIsTransition(true);
      }, IMAGE_DURATION * 2);
    }

    if (slider === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(LAST_SLIDER_NUM);
      }, IMAGE_DURATION);

      setTimeout(() => {
        setIsTransition(true);
      }, IMAGE_DURATION * 2);
    }
  }, [slider]);

  return (
    <>
      {/* 뷰어 */}
      <div className="relative w-section ">
        {/* 이미지들 */}
        <div
          className={`flex w-slider slide${slider} ${
            isTransition && `duration-${IMAGE_DURATION}`
          }`}
        >
          <PrevImage isTextAni={isTextAni} />
          <Images isTextAni={isTextAni} />
          <NextImage isTextAni={isTextAni} />
        </div>
      </div>
      <div className="absolute bottom-52 right-36">
        <button onClick={handlePrev}>왼쪽</button> <br />
        <button onClick={handleNext}>오른쪽</button>
      </div>
    </>
  );
}

//  * 원본
/**
 *  
 * <section className="w-section relative transition-all mb-20  ">
      <div className=" max-w-screen md:max-w-banner max-h-screen md:max-h-banner bg-white overflow-hidden ">
        <div
          className={`w-screen h-screen md:w-banner md:h-banner bg-cover bg-no-repeat bg-banner1 bg-left40 lg:bg-left opacity-80 xl:opacity-100 duration-200 
                `}
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
 */
