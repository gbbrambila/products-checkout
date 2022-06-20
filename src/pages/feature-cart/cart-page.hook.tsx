import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  emptyCart,
  removeProduct,
} from "../../store/cart-slice/cart.slice";
import {
  selectCartItemsWithPrice,
  selectTotalCartItems,
  sumUpCartTotal,
} from "../../store/cart-slice/cart.selectors";
import { useState } from "react";
import {
  fetchCoupon,
  resetCouponApplied,
} from "../../store/coupon-slice/coupon.slice";

export function useTotalCartItems() {
  const totalCartItems = useSelector(selectTotalCartItems);
  return totalCartItems;
}

export function useProductCartActions() {
  const dispatch = useDispatch();

  const addProductToTheCart = (id: number) => dispatch(addProduct(id));

  const removeProductFromCartById = (id: number) => dispatch(removeProduct(id));

  const eraseCart = () => {
    dispatch(resetCouponApplied());
    dispatch(emptyCart());
  };

  const applyCouponDiscount = (coupon: string | boolean) =>
    dispatch(fetchCoupon(coupon));

  return {
    addProductToTheCart,
    removeProductFromCartById,
    eraseCart,
    applyCouponDiscount,
  };
}

export function useProductCartItems() {
  const items = useSelector(selectCartItemsWithPrice);
  const cartTotal = useSelector(sumUpCartTotal);

  return { items, cartTotal };
}

export function useProductCartCoupon() {
  const [couponValue, setCouponValue] = useState<string>();

  return { couponValue, setCouponValue };
}
