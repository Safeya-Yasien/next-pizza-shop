"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { loginSchema, LoginSchema } from "@/schemas/login.schema";
import { handleLoginSubmit } from "@/actions/auth/login";

const LoginForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginSchema) => {
    setServerError(null);
    const res = await handleLoginSubmit(values);

    if (res?.message) {
      setServerError(res.message);
      toast.error(res.message);
    } else {
      toast.success("Welcome back! 🎉");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

      {/* Server Error */}
      {serverError && <p className="text-red-600 text-center">{serverError}</p>}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white shadow-md hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 hover:shadow-lg transition-all"
      >
        {isSubmitting ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
};

export default LoginForm;
