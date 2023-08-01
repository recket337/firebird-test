import { UserModel } from "../models/userModel";

////// USER LIST REDUCER

export enum UserListActionType {
    GET_USER_LIST_PENDING = 'GET_USER_LIST_PENDING',
    GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAIL = 'GET_USER_LIST_FAIL'
}

interface getListActionPending {
    type: UserListActionType.GET_USER_LIST_PENDING;
}

interface getListActionSuccess {
    type: UserListActionType.GET_USER_LIST_SUCCESS;
    payload: UserModel[];
}

interface getListActionFail {
    type: UserListActionType.GET_USER_LIST_FAIL;
    payload: string ;
}

export type GetUserListActionT = getListActionPending | getListActionSuccess | getListActionFail;

////// MODAL REDUCER

export enum ModalContentActionType {
    SET_IS_OPENED_MODAL = 'SET_IS_OPENED_MODAL',
    SET_USER_ITEM_MODAL_CONTENT = 'SET_USER_ITEM_MODAL_CONTENT',
    CLEAR_USER_ITEM_MODAL_CONTENT = 'CLEAR_USER_ITEM_MODAL_CONTENT',
}

interface setUserItemModalContent {
    type: ModalContentActionType.SET_USER_ITEM_MODAL_CONTENT;
    payload: Record<string, string>;
}

interface setIsOpenedModal {
    type: ModalContentActionType.SET_IS_OPENED_MODAL;
    payload: boolean;
}

interface clearUserItemModalContent {
    type: ModalContentActionType.CLEAR_USER_ITEM_MODAL_CONTENT;
}

export type modalContentActionT = setUserItemModalContent | setIsOpenedModal | clearUserItemModalContent;