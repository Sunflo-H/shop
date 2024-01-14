import React from "react";

export default function header() {
  return (
    <div className="w-screen flex px-4 py-2 border-b border-gray-300 ">
      <div className="flex self-center top-1/2 text-xl font-bold ml-4">
        Product Management
      </div>
      <div className="ml-auto bg-blue-500 text-white p-2 cursor-pointer">
        Add Product
      </div>
    </div>
  );
}
