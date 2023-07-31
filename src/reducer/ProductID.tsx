import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { BASEURL } from "../data/api";

export const RequestGetProductID = createAsyncThunk("getProductID", async (data) => {
  const response = await axios.get(`${BASEURL}products/28/`);
  return response.data;
});


interface ProductState{
    loading: boolean,
    error: any,
    item: [],
    count:number,
}
const initialState: ProductState = {
  loading: false,
  error: null,
  item: [],
  count:1,
};

export const productsIDSlice = createSlice({
  name: "productID",
  initialState,
  reducers: {
    setCount: (state, action) => {
      if (action.payload.type == "dec") {
        if (state.count > 1) {
          state.count -= 1
        } else {
          state.count = 1
        }
      } else {
        state.count += 1
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(RequestGetProductID.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.item = [];
      })
      .addCase(RequestGetProductID.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(RequestGetProductID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const {setCount} = productsIDSlice.actions
export default productsIDSlice.reducer;