import { ModalContentActionType, modalContentActionT } from "../../actionTypes";
import { modalState } from "./types";

const initialState: modalState = {
  isOpened: false,
  userListItem: {},
};

export const modalReducer = (
  state: modalState = initialState,
  action: modalContentActionT
): modalState => {
  switch (action.type) {
    case ModalContentActionType.SET_USER_ITEM_MODAL_CONTENT:
      return {
        ...state,
        userListItem: action.payload,
      };
    case ModalContentActionType.SET_IS_OPENED_MODAL:
      return {
        ...state,
        isOpened: action.payload,
      };
    case ModalContentActionType.CLEAR_USER_ITEM_MODAL_CONTENT:
      return {
        ...state,
        userListItem: {},
      };
    default:
      return state;
  }
};
