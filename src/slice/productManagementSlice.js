import { createSlice, current } from "@reduxjs/toolkit";

// 외부에서 상품 데이터를 요청 -> slice에 데이터 저장 -> 컴포넌트는 slice로부터 데이터를 가져와서 렌더링한다.
export const productManagementSlice = createSlice({
  name: "productManagement",
  initialState: {
    products_origin: [], // 모든 상품 정보가 있는 오리지널 데이터
    products: {
      // category
      accessories: [],
      men: [],
      shoes: [],
      women: [],
      test: [],
      // status
      sale: [],
      soldout: [],
      hide: [],
    },
    viewProducts: [], // 필터되서 보여지는 데이터
    viewCount: 10,
    categoryList: ["ALL", "Men", "Women", "Accessories", "Shoes"],
    currentCategory: "ALL",
    productStatus: ["ALL", "Sale", "Sold Out", "Hide"],
    currentStatus: "ALL",
  },
  reducers: {
    initProducts: (state, action) => {
      state.products_origin = action.payload;
      // category
      state.products.accessories = state.products_origin.filter(
        (product) => product[1].category === "Accessories"
      );
      state.products.men = state.products_origin.filter(
        (product) => product[1].category === "Men"
      );
      state.products.shoes = state.products_origin.filter(
        (product) => product[1].category === "Shoes"
      );
      state.products.women = state.products_origin.filter(
        (product) => product[1].category === "Women"
      );
      state.products.test = state.products_origin.filter(
        (product) => product[1].category === "Test"
      );
      // status
      // state.products.test = state.products_origin.filter(
      //   (product) => product[1].status === "Sale"
      // );
      // state.products.test = state.products_origin.filter(
      //   (product) => product[1].status === "Sold Out"
      // );
      // state.products.test = state.products_origin.filter(
      //   (product) => product[1].status === "Hide"
      // );
      state.viewProducts = state.products_origin;
      console.log(current(state.products));
    },
    changeViewCount: (state, action) => {
      state.viewCount = action.payload;
    },
    filterByCategory: (state, action) => {
      state.currentCategory = action.payload;
      if (state.currentCategory === "ALL")
        state.viewProducts = state.products_origin;
      else {
        state.viewProducts = state.products[action.payload.toLowerCase()];
      }
    },
    status: (state, action) => {},
  },
});

export const { initProducts, changeViewCount, filterByCategory } =
  productManagementSlice.actions;
export default productManagementSlice.reducer;
