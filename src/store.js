import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        signedIn: false,
        usertoken: null
    },
    mutations: {
        createUserToken(state, id) {
            state.usertoken = id

        },
    },
    getters: {
        getUsertoken: (state) =>  {
            return state.usertoken
        }

    },
    actions: {}
})
