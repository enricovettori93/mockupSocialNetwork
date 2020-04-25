import Conversation from '@/models/Conversation';
import ConversationService from '@/services/ConversationService';
import { ActionContext, ActionTree } from 'vuex';

// initial state
class State {
  items: Conversation[] = [];
  selectedConversation: Conversation | null = null;
}

const getters = {
  GET_CONVERSATIONS: (state: { items: Conversation[] }) => state.items,
  GET_SELECTED_CONVERSATION: (state: { selectedConversation: Conversation }) => state.selectedConversation,
};

// actions
const actions: ActionTree<State, State> = {
  FETCH_CONVERSATIONS({ commit }: ActionContext<State, State>) {
    ConversationService.fetchConversations()
      .then((feeds) => commit('STORE_CONVERSATIONS', feeds))
      .catch((e) => console.error(e));
  },
  FETCH_CONVERSATION_MESSAGE({ commit }: ActionContext<State, State>, { id }: { id: number }) {
    ConversationService.fetchConversationMessages(id)
      .then((response: Conversation) => commit('STORE_SELECTED_CONVERSATION', response))
      .catch((e) => console.error(e));
  },
  DESTROY_SELECTED_CONVERSATION({ commit }: ActionContext<State, State>) {
    commit('DESTROY_SELECTED_CONVERSATION');
  },
};

// mutations
const mutations = {
  STORE_CONVERSATIONS(state: { items: Conversation[] }, payload: Conversation[]) {
    state.items = payload;
  },
  STORE_SELECTED_CONVERSATION(state: { selectedConversation: Conversation | null }, payload: Conversation) {
    state.selectedConversation = payload;
  },
  DESTROY_SELECTED_CONVERSATION(state: { selectedConversation: Conversation | null }) {
    if (state.selectedConversation) {
      state.selectedConversation = null;
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
