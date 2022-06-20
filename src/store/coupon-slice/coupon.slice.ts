import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICouponItem } from "../../types/cart-coupon.type";

export interface CouponState {
  fetching: boolean;
  applied: ICouponItem | boolean;
  error: string | boolean;
}

const initialState: CouponState = {
  fetching: false,
  applied: false,
  error: false,
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    fetchCoupon: (state, action: PayloadAction<string | boolean>) => {
      state.fetching = true;
      state.applied = false;
      state.error = false;
    },
    fetchCouponSuccess: (state, action: PayloadAction<ICouponItem>) => {
      state.fetching = false;
      state.applied = action.payload;
      state.error = false;
    },
    fetchCouponError: (state, action: PayloadAction<string>) => {
      state.fetching = false;
      state.applied = false;
      state.error = action.payload;
    },
    resetCouponApplied: (state) => {
      state.fetching = false;
      state.applied = false;
      state.error = false;
    },
  },
});

export const {
  fetchCoupon,
  fetchCouponSuccess,
  fetchCouponError,
  resetCouponApplied,
} = couponSlice.actions;
export default couponSlice.reducer;
