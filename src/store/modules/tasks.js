import * as types from '../mutation-types';

// initial state
const state = [];

// getters
const getters = {
  getTodosByCategoryId: state => categoryId => {
    return state.filter(task => {
      return task.categoryId === categoryId;
    });
  },
};

// mutations
const mutations = {
  [types.ADD_TASK](state, {task}){
    if(!state.find(t => t.id === task.id)){
      state.push(task);
    }
  },
};

export default {
  state,
  getters,
  mutations,
}
