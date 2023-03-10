import React, { useEffect, useState } from "react";

export default function Test() {
  const [isMove, setIsMove] = useState(false);
  const [slider, setSlider] = useState(1);
  const [isTransition, setIsTransition] = useState(true);

  const prev = () => {
    setSlider((v) => v - 1);

    setIsMove(false);
    setTimeout(() => setIsMove(true), 2000); // 애니메이션 시간 후 상태 초기화
  };

  const next = () => {
    setSlider((v) => v + 1);

    setIsMove(false);
    setTimeout(() => setIsMove(true), 1000); // 애니메이션 시간 후 상태 초기화
  };

  useEffect(() => {
    setIsMove(true);
    // setIsMove(false);
  }, []);

  useEffect(() => {
    if (slider === 4) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(1);
      }, 1000);

      setTimeout(() => {
        setIsTransition(true);
      }, 2000);
    }

    if (slider === 0) {
      setTimeout(() => {
        setIsTransition(false);
        setSlider(3);
      }, 1000);

      setTimeout(() => {
        setIsTransition(true);
      }, 2000);
    }
  }, [slider]);

  return (
    <>
      <div className="w-section overflow-hidden">
        <div
          className={`flex w-slider 
            translate-x-section${slider}
           ${isTransition && "duration-1000"}`}
        >
          <PrevImage isMove={isMove} />
          <Images isMove={isMove} />
          <NextImage isMove={isMove} />
        </div>
      </div>
      <button onClick={prev}> 이전</button>
      <br />
      <button onClick={next}> 다음</button>
    </>
  );
}

const Images = ({ isMove }) => {
  return (
    <>
      <div className={`w-section h-40  bg-blue-500`}>
        {/* 이게 이미지에 애니메이션이 적용되는거지 */}
        <p
          className={`  duration-1000 mb-2 bg-red-500 ${
            isMove ? "translate-x-0 opacity-100" : "translate-x-40 opacity-20"
          }`}
        >
          Click Me
        </p>
      </div>
      <div className={`w-section h-40  bg-green-500`}>
        {/* 이게 이미지에 애니메이션이 적용되는거지 */}
        <p
          className={`  duration-1000 mb-2 bg-red-500 ${
            isMove ? "translate-x-0 opacity-100" : "translate-x-40 opacity-20"
          }`}
        >
          Click Me
        </p>
      </div>
      <div className={`w-section h-40  bg-yellow-500`}>
        {/* 이게 이미지에 애니메이션이 적용되는거지 */}
        <p
          className={`  duration-1000 mb-2 bg-red-500 ${
            isMove ? "translate-x-0 opacity-100" : "translate-x-40 opacity-20"
          }`}
        >
          Click Me
        </p>
      </div>
    </>
  );
};

const PrevImage = ({ isMove }) => {
  return (
    <div className={`w-section h-40  bg-yellow-500`}>
      <p
        className={`  duration-1000 mb-2 bg-red-500 ${
          isMove ? "translate-x-0 opacity-100" : "translate-x-40 opacity-20"
        }`}
      >
        Click Me
      </p>
    </div>
  );
};

const NextImage = ({ isMove }) => {
  return (
    <div className={`w-section h-40  bg-blue-500`}>
      <p
        className={`  duration-1000 mb-2 bg-red-500 ${
          isMove ? "translate-x-0 opacity-100" : "translate-x-40 opacity-20"
        }`}
      >
        Click Me
      </p>
    </div>
  );
};
