import axios from 'axios';
import VueNotifications from 'vue-notifications';
import {
  AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT,
} from '../actions/auth';
import { USER_REQUEST } from '../actions/user';

const initialState = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false };

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => new Promise((resolve, reject) => {
    commit(AUTH_REQUEST);
    axios({ url: 'api/v1/tokens', data: user, method: 'POST' })
      .then((resp) => {
        // eslint-disable-next-line
        const token = resp.data.token;
        localStorage.setItem('user-token', token);
        axios.defaults.headers.common.Authorization = token;
        commit(AUTH_SUCCESS, resp.data);
        dispatch(USER_REQUEST);
        resolve(resp);
        VueNotifications.success({ message: 'Вход выполнен успешно' });
      })
      .catch((err) => {
        commit(AUTH_ERROR, err);
        localStorage.removeItem('user-token');
        reject(err);
        VueNotifications.error({ message: 'Неправильный логин или пароль' });
      });
  }),
  [AUTH_LOGOUT]: ({ commit }) => new Promise((resolve) => {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('user-token');
    delete axios.defaults.headers.common.Authorization;
    resolve();
  }),
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
