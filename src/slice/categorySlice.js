import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category", // 내가 직접 다루지는 않지만 내부적으로 각 slice들을 구분하는 역할
  initialState: {
    // 슬라이스의 상태값들
    currentCategory: "Men",
    categoryList: ["Men", "Women", "Accessories", "Shoes"],
  },
  reducers: {
    // 상태를 다루는 '리듀서 함수'들
    chageCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { chageCurrentCategory } = categorySlice.actions;
export default categorySlice.reducer;
