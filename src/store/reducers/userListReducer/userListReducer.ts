import { UserListActionType, GetUserListActionT } from "../../actionTypes";
import { UserListState } from "./types";

const initialState: UserListState = {
  userList: [],
  isLoading: false,
  error: null,
};

export const userListReducer = (
  state: UserListState = initialState,
  action: GetUserListActionT
): UserListState => {
  switch (action.type) {
    case UserListActionType.GET_USER_LIST_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case UserListActionType.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: action.payload,
        isLoading: false,
      };
    case UserListActionType.GET_USER_LIST_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,   
      };
    default:
      return state;
  }
};
