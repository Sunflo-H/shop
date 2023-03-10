import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Image from "./Image";

export default function Images({
  isTextAni,
  isAble_btnClick,
  slider,
  isBtnClicked,
}) {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/products");
  };
  return (
    <>
      <Image
        num={1}
        isAble_btnClick={isAble_btnClick}
        slider={slider}
        isBtnClicked={isBtnClicked}
      />
      <Image
        num={2}
        isAble_btnClick={isAble_btnClick}
        slider={slider}
        isBtnClicked={isBtnClicked}
      />
      <Image
        num={3}
        isAble_btnClick={isAble_btnClick}
        slider={slider}
        isBtnClicked={isBtnClicked}
      />
    </>
  );
}
