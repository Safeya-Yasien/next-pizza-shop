import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <Link
        href="/login"
        className="h-12 px-6 rounded-2xl text-center flex items-center justify-center text-sm font-medium
             bg-white border-2 border-pizza-orange-200 text-gray-700 
             hover:border-pizza-orange hover:text-pizza-orange 
             shadow-sm hover:shadow-md transition-all duration-300 w-full  lg:w-32"
      >
        Login
      </Link>

      <Link
        href="/order"
        className="h-12 w-full lg:w-48 flex items-center justify-center text-center rounded-xl text-sm font-semibold text-white
             bg-gradient-to-r from-pizza-red via-pizza-orange to-pizza-yellow
             hover:from-pizza-red-hover hover:via-pizza-orange-hover hover:to-pizza-yellow-hover
             shadow-md hover:shadow-lg transition-all duration-300"
      >
        Order Now!
      </Link>
    </div>
  );
};
export default AuthButtons;
