export interface IProductItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ICartItem {
  id: number;
  quantity: number;
}

export interface IProductCartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  originalPrice: number;
  discountApplied: boolean;
}
