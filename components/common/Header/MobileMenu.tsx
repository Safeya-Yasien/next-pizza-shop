import Link from "next/link";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import AuthButtons from "./AuthButtons";
import { LogOutIcon, ShoppingCart, User } from "lucide-react";
import { useLogout } from "@/hooks/useLogout";
import { IAuthProps } from "@/types/user.type";

const MobileMenu = ({ user, setUser }: IAuthProps) => {
  const handleLogout = useLogout({ setUser });

  return (
    <>
      <div className="lg:hidden bg-white mt-6 border-t shadow-md">
        <div className="flex flex-col gap-4 p-4">
          <SearchBar />
          <ShoppingCartIcon />
          {user ? (
            <>
              <div className="">
                {/* user info */}
                <div className="flex items-center gap-3 py-2">
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center 
                     text-lg font-bold text-white shadow-md 
                     bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow"
                  >
                    {user.identifier.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-semibold bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow bg-clip-text text-transparent">
                      {user?.formData[0].value}
                    </p>
                    <p className="text-sm text-gray-500">{user.identifier}</p>
                  </div>
                </div>

                {/* links */}
                <div className="flex flex-col p-2 gap-1">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-pizza-orange rounded-md"
                  >
                    <User className="w-4 h-4 text-red-500" />
                    Profile
                  </Link>

                  <Link
                    href="/orders"
                    className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-pizza-orange rounded-md"
                  >
                    <ShoppingCart className="w-4 h-4 text-red-500" />
                    Orders
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-2 py-2 text-sm text-red-600 font-medium hover:bg-red-50 hover:text-red-700 rounded-md text-left"
                  >
                    <LogOutIcon className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
