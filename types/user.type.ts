import { IUserEntity } from "oneentry/dist/users/usersInterfaces";

export interface IAuthProps {
  user: IUserEntity | null;
  setUser: (user: IUserEntity | null) => void;
}
