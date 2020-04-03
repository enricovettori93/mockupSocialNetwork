import Conversation from '@/models/Conversation';
import ConversationService from '@/services/ConversationService';

// initial state
class State {
  items: Conversation[] = [];
}

const getters = {
  GET_CONVERSATIONS: (state: { items: any }) => state.items,
};

// actions
const actions = {
  FETCH_CONVERSATIONS({ commit }: any) {
    ConversationService.fetchConversations()
      .then((feeds) => commit('STORE_CONVERSATIONS', feeds))
      .catch((e) => console.error(e));
  },
};

// mutations
const mutations = {
  STORE_CONVERSATIONS(state: { items: Conversation[] }, payload: Conversation[]) {
    state.items = payload;
  },
};


export default {
  namespaced: true,
  state: new State(),
  getters,
  actions,
  mutations,
};
