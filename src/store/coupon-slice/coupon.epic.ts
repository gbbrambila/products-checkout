import { ofType } from "redux-observable";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { ICouponItem } from "../../types/cart-coupon.type";
import {
  fetchCoupon,
  fetchCouponError,
  fetchCouponSuccess,
  resetCouponApplied,
} from "./coupon.slice";

export const fetchCouponEpic = (action$: Observable<{ type: string }>) =>
  action$.pipe(
    ofType(fetchCoupon.type),
    tap(() => console.log("fetchCouponEpic: Fetching coupon")),
    map((data: any) => {
      const { payload: couponProvided } = data;

      if (!couponProvided) {
        return resetCouponApplied();
      }

      // TODO: Load coupon from an api
      const coupons: ICouponItem[] = [
        {
          id: "secondbite",
          discounts: [
            {
              productId: 1,
              discount: 10,
            },
          ],
        },
        {
          id: "axil",
          discounts: [
            {
              productId: 2,
              discount: 10,
            },
          ],
        },
        {
          id: "myer",
          discounts: [
            {
              productId: 2,
              discount: 10,
            },
            {
              productId: 3,
              discount: 10,
            },
          ],
        },
      ];

      const validCoupon = coupons.find(
        (c) => c.id.toLowerCase() === (couponProvided as string).toLowerCase()
      );

      if (!validCoupon) {
        return fetchCouponError("Invalid coupon provided");
      }

      return fetchCouponSuccess(validCoupon);
    }),
    catchError((error) => of(fetchCouponError(error)))
  );
