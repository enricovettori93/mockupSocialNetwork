class User {
  id = null;
  email = '';
  name = '';
  surname = '';
}

const getters = {
  GET_USER: (state: any) => state,
};

// actions
const actions = {
  SET_USER({ commit }: any, user?: User) {
    commit('UPDATE_USER', user);
  },
};

// mutations
const mutations = {
  SET_USER(state: { id: number | null; email: string; name: string; surname: string }, payload: User) {
    if (payload) {
      state = Object.assign({}, payload);
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
  state: new User(),
  getters,
  actions,
  mutations,
};
