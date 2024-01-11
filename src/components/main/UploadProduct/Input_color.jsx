export default function Input_color({ color }) {
  return (
    <>
      <input
        className="hidden"
        type="radio"
        name="color"
        value={color}
        id={color}
        required
        // onChange={handleChange}
      />
      <label
        className={`px-4 py-2 border border-gary-300 cursor-pointer `}
        htmlFor={color}
      >
        {color}
      </label>
    </>
  );
}
