import {IS_USER_AUTHENTICATED, GET_EMAIL } from "../storeconstants";

export default {
    [IS_USER_AUTHENTICATED](state) {
        return state.authenticated;
    },

    [GET_EMAIL](state) {
        return state.email;
    }
};
