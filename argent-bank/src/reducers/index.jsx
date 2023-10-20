import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import userInfos from "./userInfos";
import setInfos from "./setInfos";

/**
 * combine reducers
 */
export default combineReducers({
    auth,
    message,
    userInfos,
    setInfos
});