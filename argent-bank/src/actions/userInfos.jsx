import UserService from "../service/user.service";
import {SET_MESSAGE, USER_INFOS_FAIL, USER_INFOS_SUCCESS} from "./type";

export const userInfos = () => (dispatch) => {
    return UserService.getUserInfos().then(
        (data) => {
            dispatch({
                type: USER_INFOS_SUCCESS,
                payload: { info:data },
            });

            return data
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: USER_INFOS_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }

    )
}