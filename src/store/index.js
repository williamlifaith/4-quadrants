import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import tasks from './modules/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks
  },
  plugins: [createPersistedState()],
});
