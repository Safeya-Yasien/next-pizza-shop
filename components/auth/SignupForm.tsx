"use client";

import { useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "@/schemas/signup.schema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/lib/signup";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignupForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (values: SignupSchema) => {
    setServerError(null);
    const res = await signup(values);

    if (res.success) {
      reset();
      toast.success("Account created successfully! 🎉");
      router.push("/login");
    } else {
      setServerError(res.error);
      toast.error(res.error || "Signup failed. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          {...register("name")}
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          {...register("password")}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl border"
        />
        {errors.confirmPassword && (
          <p className="text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Server error */}
      {serverError && <p className="text-red-600 text-center">{serverError}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white shadow-md hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 hover:shadow-lg transition-all"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default SignupForm;
