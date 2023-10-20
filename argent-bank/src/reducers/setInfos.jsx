import {SET_INFOS_FAIL, SET_INFOS_SUCCESS} from "../actions/type";

const initialState = {
    setInfos: {
        firstname:"",
        lastname: "",
    }
}

/**
 * set user's informations reducer
 * @param {Object} state
 * @param {Object} action
 * @returns {{setInfos: {firstname: string, lastname: string}}|{setInfos: null}|{setInfos: {firstname: (string|*), lastname: (string|*)}}}
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_INFOS_SUCCESS:
            return {
                ...state,
                setInfos: {
                    firstname: payload.setInfos.firstname,
                    lastname: payload.setInfos.lastname,
                }
            };
        case SET_INFOS_FAIL:
            return  {
                ...state,
                setInfos: null,
            }
        default:
            return state;
    }
}