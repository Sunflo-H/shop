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
    currentPage: 1, // 현재 페이지
    currentPageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5
    search: null,
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
    filterByStatus: (state, action) => {
      state.currentStatus = action.payload;

      if (state.currentStatus === "ALL")
        state.products = state.products_category;
      else {
        state.products = state.products_category.filter(
          (product) => product[1].status === action.payload
        );
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentPageGroup: (state, action) => {
      state.currentPageGroup = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.currentCategory = "ALL";
      state.currentStatus = "ALL";
    },
  },
});

export const {
  initProducts,
  changeViewCount,
  filterByCategory,
  filterByStatus,
  setCurrentPage,
  setCurrentPageGroup,
  setSearch,
} = productManagementSlice.actions;
export default productManagementSlice.reducer;
