import { createSelector } from "@reduxjs/toolkit";
import { ICouponItem, IDiscountItem } from "../../types/cart-coupon.type";
import { ICartItem, IProductCartItem } from "../../types/product-cart.type";
import { selectCouponApplied } from "../coupon-slice/coupon.selectors";
import { selectProductsItems } from "../product-slice/products.selectors";
import { RootState } from "../store";

const selectCartState = (state: RootState) => state.cart;

export const selectTotalCartItems = createSelector(
  [selectCartState],
  ({ items }) => items.length
);

export const selectCartItems = createSelector(
  [selectCartState],
  ({ items }) => items
);

export const selectCartItemsWithPrice = createSelector(
  [selectCartItems, selectProductsItems, selectCouponApplied],

  (cartItems, productItems, couponAplied) => {
    return cartItems.reduce((acc, cartItem: ICartItem) => {
      const productItem = productItems.find(
        (productItem) => productItem.id === cartItem.id
      );

      if (!productItem) {
        return acc;
      }

      const { id, name, price } = productItem;
      const { quantity } = cartItem;

      const isThereDicountForThisProduct: IDiscountItem | undefined =
        couponAplied
          ? (couponAplied as ICouponItem).discounts.find(
              (c) => c.productId === id
            )
          : undefined;

      const originalPrice = price * quantity;

      const subtotal = isThereDicountForThisProduct
        ? originalPrice -
          (originalPrice *
            (isThereDicountForThisProduct as IDiscountItem).discount) /
            100
        : originalPrice;

      const product: IProductCartItem = {
        id,
        name,
        price,
        quantity: quantity,
        originalPrice: originalPrice,
        subtotal: subtotal,
        discountApplied: isThereDicountForThisProduct ? true : false,
      };

      acc = [...acc, product];

      return acc;
    }, [] as IProductCartItem[]);
  }
);

export const sumUpCartTotal = createSelector(
  [selectCartItemsWithPrice],
  (cartItems) => {
    return cartItems.reduce((acc: number, item: IProductCartItem) => {
      acc += item.subtotal;
      return acc;
    }, 0);
  }
);
