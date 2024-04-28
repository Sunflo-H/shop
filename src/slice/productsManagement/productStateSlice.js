import { createSlice } from "@reduxjs/toolkit";

// 외부에서 상품 데이터를 요청 -> slice에 데이터 저장 -> 컴포넌트는 slice로부터 데이터를 가져와서 렌더링한다.
export const productStateSlice = createSlice({
  name: "productState",
  initialState: {
    statusList: ["ALL", "Sale", "Sold Out", "Hide"],
  },
  reducers: {
    // filterByStatus: (state, action) => {
    //   state.currentStatus = action.payload;
    //   if (state.currentStatus === "ALL")
    //     state.products = state.products_category;
    //   else {
    //     state.products = state.products_category.filter(
    //       (product) => product[1].status === action.payload
    //     );
    //   }
    // },
  },
});

export const { filterByStatus } = productStateSlice.actions;
export default productStateSlice.reducer;
