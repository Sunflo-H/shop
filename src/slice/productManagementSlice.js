import { createSlice } from "@reduxjs/toolkit";
import useProducts from "../hooks/useProducts";

// 외부에서 상품 데이터를 요청 -> productSlice에 데이터 저장 -> productSlice로부터 데이터 보여주기
export const productManagementSlice = createSlice({
  name: "productManagement", // 내가 직접 다루지는 않지만 내부적으로 각 slice들을 구분하는 역할
  initialState: {
    products: [],
    viewCount: 10,
    currentCategory: "All",
    categoryList: ["All", "Men", "Women", "Accessories", "Shoes"],
  },
  reducers: {
    // 상태를 다루는 '리듀서 함수'들
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    changeViewCount: (state, action) => {
      state.viewCount = action.payload;
    },
    changeCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    filter_category: (state, action) => {
      console.log(state.products);
    },
  },
});

export const { setProducts, changeViewCount, changeCurrentCategory } =
  productManagementSlice.actions;
export default productManagementSlice.reducer;
