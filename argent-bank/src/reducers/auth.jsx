import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/type";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

/**
 * reducer authentification
 * @param {Object} state initial state
 * @param {Object} action
 * @returns {{isLoggedIn: boolean, user: null}|{isLoggedIn: boolean, user: any}|{isLoggedIn: boolean, user: null}|{isLoggedIn: boolean, user: (null|number|string|any|PublicKeyCredentialUserEntity)}}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}