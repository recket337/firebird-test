import { UserModel } from "../../../models/userModel";

export interface UserListItemProps {
  search: string;
  data: UserModel;
  onRemove: (email: string) => void;
}
