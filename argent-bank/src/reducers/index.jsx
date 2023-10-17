import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import userInfos from "./userInfos";
import setInfos from "./setInfos";

export default combineReducers({
    auth,
    message,
    userInfos,
    setInfos
});