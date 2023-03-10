import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function PrevImage({ isTextAni }) {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/products");
  };
  return (
    <section className="w-section relative transition-all mb-20  ">
      <div className=" max-w-screen md:max-w-banner max-h-screen md:max-h-banner bg-white overflow-hidden ">
        <div
          className={`w-screen h-screen md:w-banner md:h-banner bg-cover bg-no-repeat banner3 bg-left40 lg:bg-left opacity-80 xl:opacity-100 duration-200 
                  `}
        ></div>
      </div>
      {/* <div className="absolute top-48 md:top-64  left-10 xl:left-auto md:right-2 ">
        <h2 className=" text-5xl md:text-6xl  lg:text-7xl xl:text-8xl font-bold animate-banner-text opacity-0 mb-10 text-zinc-900">
          Discover
          <br />
          your new styles
        </h2>
        <Button text={"Shop Now"} onClick={handleBtnClick} animation />
      </div> */}
    </section>
  );
}
