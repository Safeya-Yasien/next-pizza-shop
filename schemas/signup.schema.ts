import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(2, "Full name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
