import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            authenticated: false,
            email: ""
        }
    },
    mutations,
    getters
};
