import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const MobileMenu = () => {
  return (
    <>
      <div className="lg:hidden bg-white mt-6 border-t shadow-md">
        <div className="flex flex-col gap-4 p-4">
          <SearchBar />
          <ShoppingCartIcon />
          <Link
            href="/login"
            className="h-12 px-6 rounded-2xl flex items-center justify-center text-sm font-medium
                bg-white border border-gray-300 text-gray-700
                hover:border-pizza-orange hover:text-pizza-orange 
                shadow-sm hover:shadow-md transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/order"
            className="h-12 w-full flex items-center justify-center text-center rounded-2xl text-sm font-semibold text-white
                bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow
                hover:from-pizza-red-hover hover:via-pizza-orange-hover hover:to-pizza-yellow-hover
                shadow-md hover:shadow-lg transition-all duration-300"
          >
            Order Now!
          </Link>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
