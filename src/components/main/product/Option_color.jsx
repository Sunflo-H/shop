import React from "react";

export default function Option_color({ colorList, currentColor, onChange }) {
  return (
    <div className="flex mb-4 gap-2 font-bold items-center">
      <div className="w-24 text-lg py-2">COLOR</div>
      {colorList.map((color, i) => (
        <OptionItem
          color={color}
          currentColor={currentColor}
          onChange={onChange}
          key={i}
        />
      ))}
    </div>
  );
}

function OptionItem({ color, currentColor, onChange }) {
  console.log(currentColor);
  let bg;
  switch (color) {
    case "Black":
      bg = "bg-black";
      break;
    case "Red":
      bg = "bg-red-500";
      break;
    case "Green":
      bg = "bg-green-500";
      break;
    case "Blue":
      bg = "bg-blue-500";
      break;
    case "Yellow":
      bg = "bg-yellow-500";
      break;
  }
  console.log(bg);
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="color"
        value={color}
        id={color}
        required
        onChange={onChange}
      />

      <label
        className={`border border-gray-200 p-1 cursor-pointer rounded-full shadow-md 
        ${color === currentColor && ` scale-125`}`}
        htmlFor={color}
      >
        <div className={`w-6 h-6 ${bg} rounded-full `}></div>
      </label>
    </>
  );
}
