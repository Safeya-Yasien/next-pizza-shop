import SignupForm from "@/components/auth/SignupForm";
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
      <SignupForm />

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
