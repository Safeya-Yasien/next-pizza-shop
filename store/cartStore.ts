import { ICartItem } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICartStoreProps {
  cartItems: ICartItem[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (itemId: number) => void;
  getCartItemsCount: () => number;
  clearCart: () => void;
}

export const useCartStore = create<ICartStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        cartItems: [],
        hasHydrated: false,
        setHasHydrated: (value: boolean) => {
          set({ hasHydrated: value });
        },
        addToCart: (item: ICartItem) => {
          const existingItem = get().cartItems.find((i) => i.id === item.id);

          if (existingItem) {
            set(
              {
                cartItems: get().cartItems.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                ),
              },
              false,
              "cart/addToCart"
            );
          } else {
            set(
              { cartItems: [...get().cartItems, item] },
              false,
              "cart/addToCart"
            );
          }
        },

        removeFromCart: (itemId: number) => {},
        getCartItemsCount: () => {
          return get().cartItems.length;
        },
        clearCart: () => {},
      }),

      // persist options
      {
        name: "cart",
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.hasHydrated = true;
          }
        },
      }
    )
  )
);
