"use client";

import { useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "@/schemas/signup.schema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import FormInput from "./FormInput";
import { handleSignupSubmit } from "@/actions/auth/signup";

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
    const res = await handleSignupSubmit(values);

    if ("identifier" in res) {
      reset();
      toast.success("Account created successfully! 🎉");
      router.push("/login");
    } else {
      const errorMessage =
        "message" in res ? res.message : "Signup failed. Try again.";
      setServerError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name */}
      <FormInput
        label="Full Name"
        type="text"
        placeholder="John Doe"
        {...register("name")}
        error={errors.name}
      />

      {/* Email */}
      <FormInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        {...register("email")}
        error={errors.email}
      />

      {/* Password */}
      <FormInput
        label="Password"
        type="password"
        placeholder="••••••••"
        {...register("password")}
        error={errors.password}
      />

      {/* Confirm Password */}
      <FormInput
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />

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
