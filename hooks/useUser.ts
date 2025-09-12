"use client";

import getUserSession from "@/actions/auth/getUserSession";
import { IUserEntity } from "oneentry/dist/users/usersInterfaces";
import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<IUserEntity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const userData = await getUserSession();
        if (userData) setUser(userData as IUserEntity);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUser(null);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  return { user, setUser, loading };
};
