import React, { useEffect, useState } from "react";

import Images from "./Images";
import NextImage from "./NextImage";
import PrevImage from "./PrevImage";

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const IMAGE_DURATION = 2000;
const FIRST_SLIDER_NUM = 1;
const LAST_SLIDER_NUM = 3;

export default function Slider() {
  const [slider, setSlider] = useState(1); // 몇번째 slider인지 0~4
  const [isTransition, setIsTransition] = useState(true);
  const [isAble_btnClick, setIsAble_btnClick] = useState(true);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isTextAni, setIsTextAni] = useState(false);
  const [isFirst, setIsFirst] = useState(true); // 첫 렌더링인지 체크후 바로 false가 되는 state

  const handlePrev = () => {
    if (!isAble_btnClick) return;

    setSlider((v) => v - 1);
    textAniController();
    setIsAble_btnClick(false);
    setIsBtnClicked((prev) => !prev);
    setTimeout(() => setIsAble_btnClick(true), IMAGE_DURATION * 1.1);
  };

  const handleNext = () => {
    if (!isAble_btnClick) return;

    setSlider((v) => v + 1);
    textAniController();
    setIsAble_btnClick(false);
    setIsBtnClicked((prev) => !prev);
    setTimeout(() => setIsAble_btnClick(true), IMAGE_DURATION * 1.1);
  };

  const textAniController = () => {
    setIsTextAni(false);
    setTimeout(() => setIsTextAni(true), IMAGE_DURATION * 1.1); // 애니메이션 시간 후 상태 초기화
  };

  useEffect(() => {
    setIsFirst(false);
  }, []);

  useEffect(() => {
    if (slider === 4) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(FIRST_SLIDER_NUM);
      }, IMAGE_DURATION);

      setTimeout(() => {
        setIsTransition(true);
      }, IMAGE_DURATION * 1.1); // tanstition이 활성화가 지연되는 시간과 버튼의 활성화가 지연되는 시간을 동일하게 해줘야 움직임에 끊김이 없다.
    }

    if (slider === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(LAST_SLIDER_NUM);
      }, IMAGE_DURATION);

      setTimeout(() => {
        setIsTransition(true);
      }, IMAGE_DURATION * 1.1);
    }
  }, [slider]);

  return (
    <>
      {/* 뷰어 */}
      <div className="relative w-section bg-red-500 overflow-hidden">
        {/* 이미지들 */}
        <div
          // * isFirst : 이 페이지에 첫 접근이라면 이미지슬라이드를 살짝 움직여서 배너에 애니메이션 효과를 준다.
          // * isTransition : transition이 활성화 된 상태라면 duration-2000을 준다.
          className={`flex w-slider ease-out
          ${isFirst ? "first-slide opacity-0" : `slide${slider}`} 
          ${isTransition && `duration-2000`}`}
        >
          <PrevImage //
            slider={slider}
            isBtnClicked={isBtnClicked}
          />
          <Images
            slider={slider}
            isBtnClicked={isBtnClicked}
            isAble_btnClick={isAble_btnClick}
          />
          <NextImage //
            slider={slider}
            isBtnClicked={isBtnClicked}
          />
        </div>
        <div className="absolute left-0 bottom-44 xl:left-auto xl:right-20 text-6xl ">
          <button className="mr-20 animate-pulse" onClick={handlePrev}>
            <HiArrowLongLeft />
          </button>
          <button className="animate-pulse" onClick={handleNext}>
            <HiArrowLongRight />
          </button>
        </div>
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
