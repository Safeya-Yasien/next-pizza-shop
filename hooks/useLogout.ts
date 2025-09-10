import logoutAction from "@/actions/auth/logout";
import { useRouter } from "next/navigation";
import { IUserEntity } from "oneentry/dist/users/usersInterfaces";

export const useLogout = ({
  setUser,
}: {
  setUser: (user: IUserEntity | null) => void;
}) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutAction();
      router.push("/");
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return handleLogout;
};
