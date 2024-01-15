import React from "react";
import { FiSettings } from "react-icons/fi";

export default function Nav() {
  const activeCategoryStyle = `text-blue-600 bg-blue-100`;
  return (
    <div className="w-auto h-full text-lg font-bold bg-white ml-6 ">
      <div className="flex gap-2 text-blue-500 p-4 ">
        Category Management <FiSettings className="self-center" />
      </div>
      <div className="px-4 py-1 text-blue-600 bg-blue-100">All Category</div>
    </div>
  );
}
