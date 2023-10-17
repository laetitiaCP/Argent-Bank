import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import userInfos from "./userInfos";

export default combineReducers({
    auth,
    message,
    userInfos
});