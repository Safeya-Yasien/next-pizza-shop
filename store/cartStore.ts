import { ICartItem } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ICartStoreProps {
  cartItems: ICartItem[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addToCart: (item: ICartItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  getCartItemsCount: () => number;
  clearCart: () => void;

  getSubTotal: () => number;
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

        removeFromCart: (itemId: number) => {
          set(
            (state) => ({
              cartItems: state.cartItems.filter((i) => i.id !== itemId),
            }),
            false,
            "cart/removeFromCart"
          );
        },

        getCartItemsCount: () => {
          return get().cartItems.length;
        },

        updateQuantity: (itemId: number, quantity: number) => {
          set(
            (state) => ({
              cartItems: state.cartItems.map((i) =>
                i.id === itemId ? { ...i, quantity: Math.max(1, quantity) } : i
              ),
            }),
            false,
            "cart/updateQuantity"
          );
        },

        clearCart: () => {
          set({ cartItems: [] }, false, "cart/clearCart");
        },

        getSubTotal: () => {
          return get().cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );
        },
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
