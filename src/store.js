import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productManageSlice";

export default configureStore({
  reducer: { category: categoryReducer, product: productReducer },
});
