"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import getUserSession from "@/actions/auth/getUserSession";
import { IUserEntity } from "oneentry/dist/users/usersInterfaces";

import UserDropdown from "./UserDropdown";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<IUserEntity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const userData = await getUserSession();
        if (userData) setUser(userData as IUserEntity);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUser(null);
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

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

          {!user && loading === false && <AuthButtons />}

          {user && loading === false && (
            <UserDropdown user={user} setUser={setUser} />
          )}
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
      {isOpen && <MobileMenu user={user} setUser={setUser} />}
    </header>
  );
};
export default Header;
