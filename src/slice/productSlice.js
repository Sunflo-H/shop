import { createSlice } from "@reduxjs/toolkit";
import useProducts from "../hooks/useProducts";

export const productSlice = createSlice({
  name: "product", // 내가 직접 다루지는 않지만 내부적으로 각 slice들을 구분하는 역할
  initialState: {
    // 슬라이스의 상태값들
    // men: useProducts("Men"),
    // categoryList: ["Men", "Women", "Accessories", "Shoes"],
  },
  reducers: {
    // 상태를 다루는 '리듀서 함수'들
    getCurrentProduct: (state) => {
      return state.men;
    },
    // chageCurrentCategory: (state, action) => {
    //   state.currentCategory = action.payload;
    // },
  },
});

export const { getCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
