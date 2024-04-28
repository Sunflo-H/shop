import { createSlice } from "@reduxjs/toolkit";

// 외부에서 상품 데이터를 요청 -> slice에 데이터 저장 -> 컴포넌트는 slice로부터 데이터를 가져와서 렌더링한다.
export const pageNationSlice = createSlice({
  name: "pageNation",
  initialState: {
    viewCount: 10, // 한번에 보여질 데이터 개수
    currentPage: 1, // 현재 페이지
    currentPageGroup: 1, // 현재 페이지 그룹 1~5, 6~10// 1이면 1~5
    search: null,
  },
  reducers: {
    changeViewCount: (state, action) => {
      state.viewCount = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setCurrentPageGroup: (state, action) => {
      state.currentPageGroup = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
      state.activeCategory = "ALL";
      state.activeStatus = "ALL";
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
  filter,
} = pageNationSlice.actions;
export default pageNationSlice.reducer;
