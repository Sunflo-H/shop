import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams();
  const location = useLocation();
  const { id, name, imageUrl, price, description, size } = location.state;
  console.log(location.state);
  console.log(param);
  return (
    <div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{description}</div>
        <div>사이즈</div>
        <div>장바구니에 추가</div>
      </div>
    </div>
  );
}
