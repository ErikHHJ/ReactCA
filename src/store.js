import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product];
      console.log(updatedCart);
      return { cart: updatedCart };
    }),
  clearCart: () => set({ cart: [] }),

  removeFromCart: (product) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id),
    })),
}));
