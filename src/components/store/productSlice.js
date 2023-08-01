import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../../utils/statusCode";
const initialState = {
  data: [],
  status: StatusCode.IDLE,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // fetchProducts(state, action) {  //we don't need this anymore because we write it in extraReducer for handling errors
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(
        getProducts.rejected,
        (state, action) => (state.status = StatusCode.ERROR)
      );
  },
});

export const { fetchProducts } = productSlice.actions;

//for extraReducer
export const getProducts = createAsyncThunk("products/get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const result = await response.json();
  return result;
});

//this is for reducers, now when we have extraReducers, we don't need it anymore
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const result = await response.json();
//     dispatch(fetchProducts(result));
//   };
// }

export default productSlice.reducer;
