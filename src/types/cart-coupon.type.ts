export interface IDiscountItem {
  productId: number;
  discount: number;
}

export interface ICouponItem {
  id: string;
  discounts: IDiscountItem[];
}
