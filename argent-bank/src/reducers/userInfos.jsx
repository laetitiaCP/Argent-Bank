import {USER_INFOS_FAIL, USER_INFOS_SUCCESS} from "../actions/type";

const initialState = {
    info: {
        id:"",
        email:"",
        firstname:"",
        lastname:"",
    }
}

/**
 * User's informations reducer
 * @param state
 * @param action
 * @returns {{info: {firstName: *, lastName: *, firstname: string, id, email: *, lastname: string}}|{info: null}|{info: {firstname: string, id: string, email: string, lastname: string}}}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_INFOS_SUCCESS:
            console.log(type)
            return {
                ...state,
                info: {
                   ...state.info,
                    id:payload.info.id,
                    email: payload.info.email,
                    firstName: payload.info.firstName,
                    lastName: payload.info.lastName,
                }
            };
        case USER_INFOS_FAIL:
            return {
                ...state,
                info: null,
            }
        default:
            return state;
    }
}