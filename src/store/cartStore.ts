import { create } from "zustand";

type CoffeeItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type CartItem = CoffeeItem & { quantity: number };

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CoffeeItem) => void;
  removeFromCart: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0),
    })),
  clearCart: () => set({ cart: [] }),
}));
