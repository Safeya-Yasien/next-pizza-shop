import Link from "next/link";

import { LogOutIcon, ShoppingCart, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/hooks/useLogout";
import { IAuthProps } from "@/types/user.type";

const UserDropdown = ({ user, setUser }: IAuthProps) => {
  const handleLogout = useLogout({ setUser });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="h-12 w-12 rounded-2xl flex items-center justify-center 
                            text-lg font-bold text-white shadow-md 
                            bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow
                            hover:opacity-90 transition cursor-pointer"
        >
          {user.identifier.charAt(0).toUpperCase()}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 rounded-xl shadow-lg border border-gray-100 bg-white"
        align="end"
      >
        {/* user info */}
        <div className="px-4 py-3 border-b border-gray-100">
          <p className="text-lg font-semibold bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow bg-clip-text text-transparent">
            {user?.formData[0].value}
          </p>
          <p className="text-xs text-gray-500">{user.identifier}</p>
        </div>

        {/* links */}
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="cursor-pointer w-full px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-pizza-orange rounded-md"
          >
            <User className="w-4 h-4 text-red-500" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/orders"
            className="cursor-pointer w-full px-2 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-pizza-orange rounded-md"
          >
            <ShoppingCart className="w-4 h-4 text-red-500" /> Orders
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* logout */}
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 font-medium hover:bg-red-50 hover:text-red-700 rounded-md cursor-pointer"
        >
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
