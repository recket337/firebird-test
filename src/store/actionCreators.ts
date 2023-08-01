import axios from "axios";
import { Dispatch } from "redux";
import {
  UserListActionType,
  GetUserListActionT,
  modalContentActionT,
  ModalContentActionType,
} from "./actionTypes";

export const getUserList = () => {
  return async (dispatch: Dispatch<GetUserListActionT>) => {
    dispatch({
      type: UserListActionType.GET_USER_LIST_PENDING,
    });

    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      dispatch({
        type: UserListActionType.GET_USER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      let message = "Something gone wrong";
      if (error instanceof Error) message = error.message;
      dispatch({
        type: UserListActionType.GET_USER_LIST_FAIL,
        payload: message,
      });
    }
  };
};

export const setIsModalOpened = (state: boolean) => {
  return (dispatch: Dispatch<modalContentActionT>) => {
    if (!state) {
      dispatch({
        type: ModalContentActionType.CLEAR_USER_ITEM_MODAL_CONTENT,
      });
    }
    dispatch({
      type: ModalContentActionType.SET_IS_OPENED_MODAL,
      payload: state,
    });
  };
};

export const setUserItemModalContent = (data: Record<string, string>) => {
  return (dispatch: Dispatch<modalContentActionT>) => {
    dispatch({
      type: ModalContentActionType.SET_USER_ITEM_MODAL_CONTENT,
      payload: data,
    });
  };
};
