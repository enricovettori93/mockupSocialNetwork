import { ActionContext, ActionTree } from 'vuex';
import User from '@/models/User';

class State {
  id = null;
  email = '';
  name = '';
  surname = '';
}

const getters = {
  GET_USER: (state: User) => state,
};

// actions
const actions: ActionTree<State, State> = {
  SET_USER({ commit }: ActionContext<State, State>, user?: User) {
    commit('SET_USER', user);
  },
};

// mutations
const mutations = {
  SET_USER(state: { id: number | null; email: string; name: string; surname: string }, payload: User) {
    if (payload) {
      Object.assign(state, payload);
    } else {
      state.id = null;
      state.email = '';
      state.name = '';
      state.surname = '';
    }
  },
};

export default {
  namespaced: true,
  state: new State(),
  getters,
  actions,
  mutations,
};
