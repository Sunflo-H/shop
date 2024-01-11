export default function Input_size({ size }) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="size"
        value={size}
        id={size}
        required
        // onChange={handleChange}
      />
      <label
        className={`px-4 py-2 border border-gary-300 cursor-pointer `}
        htmlFor={size}
      >
        {size}
      </label>
    </>
  );
}
