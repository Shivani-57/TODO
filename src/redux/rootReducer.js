import { combineReducers } from "redux";
import { todoReducers } from "./todo/reducers/todoReducers";

export const rootReducer = combineReducers({
    todoReducers
})