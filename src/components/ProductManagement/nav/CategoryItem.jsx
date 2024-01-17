export default function CategoryItem({
  value,
  currentCategory,
  handleCategoryClick,
}) {
  const activeCategoryStyle = `text-blue-600 bg-blue-100`;
  return (
    <div
      className={`pl-12 py-2 cursor-pointer hover:bg-blue-50 ${
        currentCategory === value ? activeCategoryStyle : ""
      } `}
      onClick={(e) => handleCategoryClick(e, value)}
    >
      {value}
    </div>
  );
}
