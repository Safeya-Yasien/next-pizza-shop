import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          {/* Back Arrow */}
          <Link
            href="/"
            className="absolute top-4 left-4 p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 dark:bg-gray-800 dark:text-orange-400 transition cursor-pointer shadow-sm"
          >
            {" "}
            <ArrowLeft size={22} strokeWidth={2.5} />{" "}
          </Link>

          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
