import React, { useEffect, useState } from "react";

export default function Test() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // 애니메이션 시간 후 상태 초기화
  };

  useEffect(() => {
    handleClick();
    console.log(isClicked);
  }, []);

  return (
    <div
      className={`w-40 h-40 bg-blue-500 transition-colors ${
        isClicked ? "bg-red-500" : ""
      }`}
      onClick={handleClick}
    >
      Click Me
    </div>
  );
}
