import { combineReducers } from 'redux';
import { userListReducer } from './userListReducer';
import { modalReducer } from './modalState';

const reducers = combineReducers({
    userList: userListReducer,
    modal: modalReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;