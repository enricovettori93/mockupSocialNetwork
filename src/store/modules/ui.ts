const getters = {
  GET_LOADING_STATUS: (state: { loading: boolean }) => state.loading,
};

// actions
const actions = {
  UPDATE_LOADING_STATUS({ commit }: any, { loading = false }) {
    commit('UPDATE_LOADING_STATUS', loading);
  },
};

// mutations
const mutations = {
  UPDATE_LOADING_STATUS(state: { loading: boolean }, payload: boolean) {
    state.loading = payload;
  },
};

// initial state
const state = {
  loading: false,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
