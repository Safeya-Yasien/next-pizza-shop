"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

const CartSummary = () => {
  const { getSubTotal } = useCartStore();

  const subTotal = getSubTotal();
  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  return (
    <div
      className="mt-20 relative overflow-hidden rounded-3xl 
                    bg-gradient-to-br from-white via-orange-50 to-yellow-50 
                    dark:from-gray-900 dark:via-gray-950 dark:to-black 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-orange-100/60 dark:border-gray-800 
                    p-10 sm:p-12"
    >
      {/* Title */}
      <h2 className="text-center  text-4xl font-extrabold mb-10 tracking-tight text-gray-800 dark:text-gray-100">
        Order{" "}
        <span className=" bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Summary
        </span>
      </h2>

      {/* Details */}
      <div className=" space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center rounded-2xl bg-white/90 dark:bg-gray-900/70 border border-orange-100/70 dark:border-gray-700 px-6 py-5 shadow-sm">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Subtotal
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${subTotal.toFixed(2)}
          </span>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center rounded-2xl bg-white/90 dark:bg-gray-900/70 border border-orange-100/70 dark:border-gray-700 px-6 py-5 shadow-sm">
          <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Tax (10%)
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            ${tax.toFixed(2)}
          </span>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 border border-orange-200 dark:border-gray-600 px-6 py-6 shadow-md">
          <span className="text-xl font-extrabold text-gray-800 dark:text-gray-100">
            Total
          </span>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        className="relative z-10 w-full mt-10 cursor-pointer
                        bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 
                        text-white font-bold text-xl py-6 rounded-2xl 
                        shadow-lg hover:shadow-xl 
                        hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 
                        active:brightness-95 
                        transition-all duration-300"
      >
        Checkout Now
      </Button>
    </div>
  );
};
export default CartSummary;
