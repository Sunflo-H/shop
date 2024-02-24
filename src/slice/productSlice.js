import { createSlice } from "@reduxjs/toolkit";
import useProducts from "../hooks/useProducts";

// 외부에서 상품 데이터를 요청 -> productSlice에 데이터 저장 -> productSlice로부터 데이터 보여주기
export const productSlice = createSlice({
  name: "product", // 내가 직접 다루지는 않지만 내부적으로 각 slice들을 구분하는 역할
  initialState: {
    products: [],
    viewCount: 10,
  },
  reducers: {
    // 상태를 다루는 '리듀서 함수'들
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    changeViewCount: (state, action) => {
      console.log("체인지~");
      state.viewCount = action.payload;
    },
  },
});

export const { setProducts, changeViewCount } = productSlice.actions;
export default productSlice.reducer;
