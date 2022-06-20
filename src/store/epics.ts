import { combineEpics } from "redux-observable";
import { fetchCouponEpic } from "./coupon-slice/coupon.epic";
import { fetchProductsEpic } from "./product-slice/product.epic";

const epics = [fetchProductsEpic, fetchCouponEpic];

export const combinedEpics = combineEpics(...epics as any);
