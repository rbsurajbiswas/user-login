import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    async login({commit}, user) {
        commit('login_request');
        try {
            let res = await axios.post('http://localhost:5000/api/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('login_success', token, user);
            }
            return res;
        } catch (err) {
            commit('login_error', err);
        }
    },

    async signup({commit}, userData) {
        try {
            commit('signup_request');
            let res = await axios.post('http://localhost:5000/api/users/signup', userData);
            if (res.data.success !== undefined) {
                commit('signup_success');
            }
            return res;
        } catch (err) {
            commit('signup_error', err)
        }
    },

    async getProfile({commit}) {
        commit('profile_request');
        let res = await axios.get('http://localhost:5000/api/users/profile')
        commit('profile_success', res.data.user)
        return res;
    },

    async logout({commit}) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push("/");
        return
    }
};

const mutations = {
    login_request(state) {
        state.error = null
        state.status = 'loading'
    },
    login_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    login_error(state, err) {
        state.error = err.response.data.msg
    },
    signup_request(state) {
        state.error = null
        state.status = 'loading'
    },
    signup_success(state) {
        state.error = null
        state.status = 'success'
    },
    signup_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    profile_success(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};