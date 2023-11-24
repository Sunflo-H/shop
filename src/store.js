import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";

export default configureStore({
  reducer: { category: categoryReducer },
});
