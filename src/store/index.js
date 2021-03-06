import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

const state = {
    user: ls.getItem('user'),
    auth:ls.getItem('auth')
}

const mutations = {
    UPDATE_USER(state, user) {
        state.user = user
        ls.setItem('user', user)
    },

    //添加UPDATE_AUTH 来更改当前用户状态
    UPDATE_AUTH(state,auth){
        state.auth = auth
        ls.setItem('auth',auth)
    }
}

const actions = {
    login({ commit }, user) {
        if (user) commit('UPDATE_USER', user)

        //更新党庆用户状态已登录
        commit('UPDATE_AUTH',true)
        router.push('/')
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store