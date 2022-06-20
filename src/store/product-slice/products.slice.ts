import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductItem } from "../../types/product-cart.type";

export interface ProductsState {
  initialized: boolean;
  fetching: boolean;
  items: IProductItem[];
  error: string | boolean;
}

const initialState: ProductsState = {
  initialized: false,
  fetching: false,
  items: [],
  error: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.fetching = true;
      state.items = [];
      state.error = false;
    },
    fetchProductsSuccess: (state, action: PayloadAction<IProductItem[]>) => {
      state.fetching = false;
      state.initialized = true;
      state.items = action.payload;
    },
    fetchProductsError: (state, action: PayloadAction<string | boolean>) => {
      state.items = [];
      state.initialized = true;
      state.error = action.payload;
    },
  },
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsError } =
  productsSlice.actions;
export default productsSlice.reducer;
