import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 z-50 py-4 w-full border-b ">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 ">
        {/* logo */}
        <Link href={"/"} className="flex items-center ">
          <Image src={"/logo.png"} alt="Pizzaro" width={40} height={40} />
          <span className="bg-pizza-gradient bg-clip-text text-transparent text-4xl font-bold">
            Pizzaro
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* searchbar */}
          <SearchBar />
          {/* cart */}
          <ShoppingCartIcon />
          {/* login */}
          <Link
            href="/login"
            className="h-12 px-6 rounded-2xl text-center flex items-center justify-center text-sm font-medium
             bg-white border border-gray-300 text-gray-700
             hover:border-pizza-orange hover:text-pizza-orange 
             shadow-sm hover:shadow-md transition-all duration-300"
          >
            Login
          </Link>

          <Link
            href="/order"
            className="h-12 w-48 flex items-center justify-center text-center rounded-xl text-sm font-semibold text-white
             bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow
             hover:from-pizza-red-hover hover:via-pizza-orange-hover hover:to-pizza-yellow-hover
             shadow-md hover:shadow-lg transition-all duration-300"
          >
            Order Now!
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
