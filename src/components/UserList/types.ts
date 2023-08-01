import { UserModel } from "../../models/userModel";

export interface UserListProps {
    data: UserModel[];
    search: string;
    onRemove: (email: string) => void;
}