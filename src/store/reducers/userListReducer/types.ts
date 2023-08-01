import { UserModel } from "../../../models/userModel";

export type UserListState = {
  userList: UserModel[];
  isLoading: boolean;
  error: string | null;
};