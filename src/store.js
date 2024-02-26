import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productManagementReducer from "./slice/productManagementSlice";

export default configureStore({
  reducer: {
    // category: categoryReducer,
    productManagement: productManagementReducer,
  },
});
