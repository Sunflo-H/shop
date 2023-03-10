import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Image from "./Image";

export default function Images({ isTextAni }) {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/products");
  };
  return (
    <>
      <Image num={1} />
      <Image num={2} />
      <Image num={3} />
    </>
  );
}
