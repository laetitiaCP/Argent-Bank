import UserService from "../service/user.service";
import {SET_MESSAGE, USER_INFOS_FAIL, USER_INFOS_SUCCESS} from "./type";

/**
 * action of receiving user informations
 * @returns {function(*): Promise<unknown>} return promise
 */
export const userInfos = () => (dispatch) => {
    return UserService.getUserInfos().then(
        (data) => {
            dispatch({
                type: USER_INFOS_SUCCESS,
                payload: { info:data },
            });
            console.log(data)
            return data;
        },
        (error) => {
            console.log(error)
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