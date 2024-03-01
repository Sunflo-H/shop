import { createSlice, current } from "@reduxjs/toolkit";

// 외부에서 상품 데이터를 요청 -> slice에 데이터 저장 -> 컴포넌트는 slice로부터 데이터를 가져와서 렌더링한다.
export const productManagementSlice = createSlice({
  name: "productManagement",
  initialState: {
    products_origin: [], // 모든 상품 정보가 있는 오리지널 데이터
    products_category: [], // 카테고리 필터가 적용된 데이터
    products: [], // 필터되서 보여지는 데이터
    viewCount: 10,
    categoryList: ["ALL", "Men", "Women", "Accessories", "Shoes"],
    currentCategory: "ALL",
    statusList: ["ALL", "Sale", "Sold Out", "Hide"],
    currentStatus: "ALL",
  },
  reducers: {
    initProducts: (state, action) => {
      state.products_origin = action.payload;
      state.products_category = state.products_origin;
      state.products = state.products_origin;
    },
    changeViewCount: (state, action) => {
      state.viewCount = action.payload;
    },
    filterByCategory: (state, action) => {
      state.currentCategory = action.payload;
      resetStatus();
      if (state.currentCategory === "ALL") {
        state.products_category = state.products_origin;
        state.products = state.products_category;
      } else {
        state.products_category = state.products_origin.filter(
          (product) => product[1].category === action.payload
        );
        state.products = state.products_category;
      }

      function resetStatus() {
        state.currentStatus = "ALL";
      }
    },
    filterByStatus: (state, action) => {
      console.log(current(state.products_category));
      state.currentStatus = action.payload;
      // 카테고리 필터가 적용중인 경우와 아닌경우

      if (state.currentStatus === "ALL")
        state.products = state.products_category;
      else {
        state.products = state.products_category.filter(
          (product) => product[1].status === action.payload
        );
      }
    },
  },
});

export const {
  initProducts,
  changeViewCount,
  filterByCategory,
  filterByStatus,
} = productManagementSlice.actions;
export default productManagementSlice.reducer;
