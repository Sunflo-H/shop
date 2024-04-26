import { createSlice } from "@reduxjs/toolkit";

// 외부에서 상품 데이터를 요청 -> slice에 데이터 저장 -> 컴포넌트는 slice로부터 데이터를 가져와서 렌더링한다.
export const productCategorySlice = createSlice({
  name: "productCategory",
  initialState: {
    categoryList: ["ALL", "Men", "Women", "Accessories", "Shoes"],
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.currentCategory = action.payload;
      state.currentStatus = "ALL";
      if (state.currentCategory === "ALL") {
        state.products_category = state.products_origin;
        state.products = state.products_category;
      } else {
        state.products_category = state.products_origin.filter(
          (product) => product[1].category === action.payload
        );
        state.products = state.products_category;
      }
    },
  },
});

export const { filterByCategory } = productCategorySlice.actions;
export default productCategorySlice.reducer;
