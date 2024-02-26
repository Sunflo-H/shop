import { createSlice, current } from "@reduxjs/toolkit";

// 외부에서 상품 데이터를 요청 -> productSlice에 데이터 저장 -> productSlice로부터 데이터 보여주기
export const productManagementSlice = createSlice({
  name: "productManagement", // 내가 직접 다루지는 않지만 내부적으로 각 slice들을 구분하는 역할
  initialState: {
    products_origin: [], // 모든 상품 정보가 있는 오리지널 데이터
    products: [], // 필터되서 보여지는 데이터
    viewCount: 10,
    categoryList: ["All", "Men", "Women", "Accessories", "Shoes"],
    currentCategory: "All",
  },
  reducers: {
    // 상태를 다루는 '리듀서 함수'들
    setProducts_init: (state, action) => {
      state.products_origin = action.payload;
      state.products = state.products_origin;
    },
    changeViewCount: (state, action) => {
      state.viewCount = action.payload;
    },
    filterByCategory: (state, action) => {
      state.currentCategory = action.payload;
      if (state.currentCategory === "All")
        state.products = state.products_origin;
      else {
        state.products = state.products_origin.filter(
          (product) => product[1].category === action.payload
        );
      }
      // console.log(state.products);
      // console.log(current(state.products_origin));
    },
  },
});

export const { setProducts_init, changeViewCount, filterByCategory } =
  productManagementSlice.actions;
export default productManagementSlice.reducer;
