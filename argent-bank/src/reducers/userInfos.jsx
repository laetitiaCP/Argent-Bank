import {USER_INFOS_FAIL, USER_INFOS_SUCCESS} from "../actions/type";

const initialState = {
    info: {
        id:"",
        email:"",
        firstname:"",
        lastname:"",
    }
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_INFOS_SUCCESS:
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