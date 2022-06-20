import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


const selectCouponState = (state: RootState) => state.coupon;

export const selectCouponApplied = createSelector([selectCouponState], (coupon) => {
  return coupon.applied;
});
