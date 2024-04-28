import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productManagementReducer from "./slice/productsManagement/productManagementSlice";
import productStateReducer from "./slice/productsManagement/productStateSlice";
import productCategoryReducer from "./slice/productsManagement/productCategorySlice";
import pageNationReducer from "./slice/productsManagement/pageNationSlice";

export default configureStore({
  reducer: {
    category: categoryReducer,
    productManagement: productManagementReducer,
    productState: productStateReducer,
    productCategory: productCategoryReducer,
    pageNation: pageNationReducer,
  },
});
