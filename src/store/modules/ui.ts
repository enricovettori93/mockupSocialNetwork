import { ActionContext, ActionTree } from 'vuex';

class State {
  loading = false;
  whiteoverlay = false;
}


const getters = {
  GET_LOADING_STATUS: (state: { loading: boolean }) => state.loading,
  GET_WHITE_OVERLAY_STATUS: (state: { whiteoverlay: boolean }) => state.whiteoverlay,
};

// actions
const actions: ActionTree<State, State> = {
  UPDATE_LOADING_STATUS({ commit }: ActionContext<State, State>, { status = false }) {
    commit('UPDATE_LOADING_STATUS', status);
  },
  UPDATE_WHITE_OVERLAY_STATUS({ commit }: ActionContext<State, State>, { status = false }) {
    commit('UPDATE_WHITE_OVERLAY_STATUS', status);
  },
};

// mutations
const mutations = {
  UPDATE_LOADING_STATUS(state: { loading: boolean }, payload: boolean) {
    state.loading = payload;
  },
  UPDATE_WHITE_OVERLAY_STATUS(state: { whiteoverlay: boolean }, payload: boolean) {
    state.whiteoverlay = payload;
  },
};

export default {
  namespaced: true,
  state: new State(),
  getters,
  actions,
  mutations,
};
