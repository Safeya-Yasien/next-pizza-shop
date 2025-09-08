"use client";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 fixed top-0 left-0 z-50 py-4 w-full backdrop-blur-xl ">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-12 ">
        {/* logo */}
        <Link href={"/"} className="flex items-center ">
          <span className="text-3xl"> 🍕</span>
          <span className="bg-pizza-gradient bg-clip-text text-transparent text-4xl font-bold">
            Pizzaro
          </span>
        </Link>

        {/* right side desktop */}
        <div className=" items-center gap-4 hidden lg:flex">
          {/* searchbar */}
          <SearchBar />
          {/* cart */}
          <ShoppingCartIcon />
          {/* login */}
          <Link
            href="/login"
            className="h-12 px-6 rounded-2xl text-center flex items-center justify-center text-sm font-medium
             bg-white border-2 border-pizza-orange-200 text-gray-700 
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

        {/* right side mobile */}
        <button
          className="lg:hidden p-2 rounded-md border border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={24} className="text-pizza-orange" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu />}
    </header>
  );
};
export default Header;
