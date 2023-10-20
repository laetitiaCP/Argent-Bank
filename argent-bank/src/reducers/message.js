import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/type";

const initialState = {};

/**
 * message reducers
 * @param {Object} state initial state
 * @param {Object} action
 * @returns {{message}|{}|{message: string}}
 */
//eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };

        case CLEAR_MESSAGE:
            return { message: "" };

        default:
            return state;
    }
}