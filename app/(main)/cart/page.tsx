"use client";

import CartItem from "@/components/CartItem";
import { useCartStore } from "@/store/cartStore";
import CartSummary from "@/components/CartSummary";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { cartItems, hasHydrated, getCartItemsCount, clearCart } =
    useCartStore();
  const cartItemCount = getCartItemsCount();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-orange-50 
  dark:from-gray-900 dark:via-gray-950 dark:to-black  py-24 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              My Cart
            </span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-lg">
            Review your pizzas before checkout
          </p>
        </div>

        {/* Clear Cart Button */}
        {hasHydrated && cartItemCount > 0 && (
          <div className="flex justify-end mb-6">
            <Button
              variant="ghost"
              onClick={() => clearCart()}
              className="cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl font-medium"
            >
              Clear Cart
            </Button>
          </div>
        )}

        {/* Cart Items */}
        {!hasHydrated ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="ml-4 text-gray-600 dark:text-gray-400 font-medium">
              Loading your pizzas...
            </span>
          </div>
        ) : (
          <div className="grid gap-6">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}

        {/* Summary */}
        {hasHydrated && <CartSummary />}
      </div>
    </div>
  );
};

export default CartPage;
