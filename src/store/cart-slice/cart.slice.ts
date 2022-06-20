import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICouponItem } from "../../types/cart-coupon.type";
import { ICartItem } from "../../types/product-cart.type";

export interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload: id }: PayloadAction<number>) => {
      const currentProduct = state.items.find((i) => i.id === id);
      if (!currentProduct) {
        const newCartItem: ICartItem = {
          id: id,
          quantity: 1,
        };
        state.items = [newCartItem, ...state.items];
        return;
      }
      currentProduct.quantity = currentProduct.quantity + 1;
    },
    removeProduct: (state, { payload: id }: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== id);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
