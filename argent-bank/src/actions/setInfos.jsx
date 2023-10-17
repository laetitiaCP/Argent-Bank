import UserService from "../service/user.service";
import {SET_INFOS_FAIL, SET_INFOS_SUCCESS, SET_MESSAGE, USER_INFOS_FAIL} from "./type";

export const setInfos = (firstname, lastname) => (dispatch) => {
    return UserService.setUserInfos(firstname, lastname).then(
        (data) => {
            dispatch({
                type: SET_INFOS_SUCCESS,
                payload: {setInfos:data},
            });

            return data;
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_INFOS_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    )
}