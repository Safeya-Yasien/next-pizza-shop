"use client";

import { SignupSchema } from "@/schemas/signup.schema";
import { handleSignupSubmit } from "@/actions/auth/signup";

export async function signup(values: SignupSchema) {
  const response = await handleSignupSubmit({
    name: values.name,
    email: values.email,
    password: values.password,
  });

  if ("identifier" in response) {
    return { success: true, data: response };
  } else {
    return { success: false, error: response.message };
  }
}
