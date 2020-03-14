import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folderNames: [],
    user: null,
    pictureCount: 0,
    folderPath: '',
    message: '',
    loading: false
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    // ユーザー情報保存
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {},
  modules: {}
});