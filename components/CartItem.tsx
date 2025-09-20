"use client";

import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ICartItem } from "@/types";
import { useCartStore } from "@/store/cartStore";

const CartItem = ({ id, name, price, quantity, image }: ICartItem) => {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          width={80}
          height={80}
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-xl border border-gray-200 dark:border-gray-700"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          onClick={() => updateQuantity(id, quantity - 1)}
          className="cursor-pointer h-8 w-8 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-105 transition-transform"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-semibold text-gray-800 dark:text-gray-200">
          {quantity}
        </span>
        <Button
          size="icon"
          onClick={() => updateQuantity(id, quantity + 1)}
          className="cursor-pointer h-8 w-8 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:scale-105 transition-transform"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Remove */}
      <Button
        onClick={() => removeFromCart(id)}
        variant="ghost"
        size="icon"
        className="cursor-pointer text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default CartItem;
