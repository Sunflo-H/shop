import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productManagementReducer from "./slice/productsManagement/productManagementSlice";
import productStateReducer from "./slice/productsManagement/productStateSlice";
import productCategoryReducer from "./slice/productsManagement/productCategorySlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    productManagement: productManagementReducer,
    productState: productStateReducer,
    productCategory: productCategoryReducer,
  },
});
