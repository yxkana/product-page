import { string } from "zod";
import { create, useStore } from "zustand";
import { ShoppingCart } from "react-feather";

export interface Product {
  name: string;
  quantity: number;
  productPrice: number;
  price: number;
}

interface CartState {
  cart: Array<Product>;
  increase: (by: Product) => void;
  delete: (prod: Product) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  increase: (by) => set((state) => ({ cart: [...state.cart, by] })),
  delete: (prod) =>
    set((state) => ({
      cart: state.cart.filter(function (item) {
        return item !== prod;
      }),
    })),
}));

export function CartDisplayer() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  return cart;
}
