// stores/cartStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  addQty: (params: { id: string; quantity: number }) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find(i => i.id === item.id);
        if (existingItem) {
          set({
            cart: currentCart.map(i =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            )
          });
        } else {
          set({ cart: [...currentCart, item] });
        }
      },
      addQty: ({ id, quantity }) => {
        const currentCart = get().cart;
        set({
          cart: currentCart.map(i =>
            i.id === id ? { ...i, quantity: quantity } : i
          )
        });
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter(item => item.id !== id) });
      },
      clearCart: () => {
        set({ cart: [] });
      }
    }),
    {
      name: 'cart', // name of the item in localStorage
    }
  )
);