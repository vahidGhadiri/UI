import {combineReducers} from "redux";
import UserReducer from "./user.reducer";

export const RootReducer = combineReducers({
    user: UserReducer
})