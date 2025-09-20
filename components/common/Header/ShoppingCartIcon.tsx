"use client";

import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { getCartItemsCount, hasHydrated } = useCartStore();

  const itemCount = getCartItemsCount();

  if (!hasHydrated) return null;

  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className="relative h-12 px-4 flex items-center justify-center 
                 rounded-2xl bg-white border border-gray-200 shadow-sm
                 hover:bg-pizza-orange/10 hover:border-pizza-orange 
                 transition-colors duration-300"
    >
      <ShoppingCart className="w-5 h-5 text-pizza-orange" aria-hidden="true" />

      {itemCount > 0 && (
        <span
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                     font-bold w-5 h-5 flex items-center justify-center 
                     rounded-full shadow-md"
        >
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default ShoppingCartIcon;
