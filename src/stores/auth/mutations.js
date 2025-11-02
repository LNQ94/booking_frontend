import {
    SET_AUTHENTICATION,
    SET_EMAIL
} from "../storeconstants";

export default {

    [SET_AUTHENTICATION](state, authenticated) {
        state.authenticated = authenticated;
    },
    [SET_EMAIL](state, email) {
        state.email = email;
    }
};
