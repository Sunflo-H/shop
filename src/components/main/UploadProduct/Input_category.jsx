export default function Input_category({ category, handleChange, product }) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="category"
        value={category}
        id={category}
        required
        onChange={handleChange}
      />
      <label
        className={`px-4 py-2 border border-gary-300 cursor-pointer ${
          product?.category === category && "bg-black text-white"
        }`}
        htmlFor={category}
      >
        {category}
      </label>
    </>
  );
}
