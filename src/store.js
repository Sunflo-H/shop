import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";

export default configureStore({
  reducer: { category: categoryReducer, product: productReducer },
});
