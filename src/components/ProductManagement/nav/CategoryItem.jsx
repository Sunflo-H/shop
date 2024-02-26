import { useDispatch, useSelector } from "react-redux";
import { changeCurrentCategory } from "../../../slice/productManagementSlice";

export default function CategoryItem({
  value,
  // currentCategory,
  // handleCategoryClick,
}) {
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state) => state.productManagement.currentCategory
  );
  const activeCategoryStyle = `text-blue-600 bg-blue-100`;

  return (
    <div
      className={`pl-12 py-2 cursor-pointer hover:bg-blue-50 ${
        currentCategory === value ? activeCategoryStyle : ""
      } `}
      onClick={() => dispatch(changeCurrentCategory(value))}
    >
      {value}
    </div>
  );
}
