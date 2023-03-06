import React from "react";
import Button from "../ui/Button";

export default function HomeContents1() {
  return (
    <div className="w-full h-section flex flex-col m-auto ">
      <div className="flex w-full h-3/4 justify-around px-20">
        <img className="w-2/5 " src="/images/woman4.jpg"></img>
        <img className="w-2/5 " src="/images/woman5.jpg"></img>
      </div>
      <div className="text-center ">
        <p className="text-center  text-3xl my-10 ">
          Embrace the relaxed elegance of the Spring
          <br />
          Summer 2023 collection
        </p>

        <Button />
      </div>
    </div>
  );
}
