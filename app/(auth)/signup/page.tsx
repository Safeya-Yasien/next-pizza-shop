import Link from "next/link";

const SignupPage = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        {/* Badge */}
        <div className="mx-auto w-fit bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 text-white font-semibold py-2 px-6 inline-flex items-center gap-2 rounded-full shadow-lg mb-5">
          <span className="text-xs tracking-wide uppercase">
            Join The Family!
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 drop-shadow-lg leading-tight">
          Sign Up
        </h1>

        {/* Subtext */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
          Create your{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            Pizzaro
          </span>{" "}
          account and start your{" "}
          <span className="text-yellow-600 font-semibold">
            flavor adventure
          </span>
          !
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition shadow-sm hover:shadow-md"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition shadow-sm hover:shadow-md"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition shadow-sm hover:shadow-md"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition shadow-sm hover:shadow-md"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white shadow-md hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 hover:shadow-lg transition-all"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Already a member?{" "}
        <Link
          href="/login"
          className="text-orange-600 dark:text-orange-400 font-semibold hover:underline"
        >
          Sign in here
        </Link>
      </p>
    </>
  );
};

export default SignupPage;
