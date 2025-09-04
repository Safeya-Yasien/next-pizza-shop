import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className="relative  h-12 px-4 flex items-center justify-center 
                 rounded-2xl bg-white border border-gray-200 shadow-sm
                 hover:bg-pizza-orange/10 hover:border-pizza-orange 
                 transition-colors duration-300"
    >
      <ShoppingCart className="w-5 h-5 text-pizza-orange" aria-hidden="true" />
    </Link>
  );
};

export default ShoppingCartIcon;
