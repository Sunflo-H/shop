import React from "react";

export default function Slider() {
  return (
    <div class="kind_wrap">
      {/* viewer */}
      <div class="kind_slider">
        {/* 이게 움직이는애  */}
        <ul class="slider">
          <li>
            <img src="https://source.unsplash.com/random?flower" alt="" />
          </li>
          <li>
            <img src="https://source.unsplash.com/random?girl" alt="" />
          </li>
          <li>
            <img src="https://source.unsplash.com/random?baby" alt="" />
          </li>
          <li>
            <img src="https://source.unsplash.com/random?animal" alt="" />
          </li>
          <li>
            <img src="https://source.unsplash.com/random?space" alt="" />
          </li>
        </ul>
      </div>
      <div class="arrow">
        <a href="" class="prev">
          이전
        </a>
        <a href="" class="next">
          다음
        </a>
      </div>
    </div>
  );
}
