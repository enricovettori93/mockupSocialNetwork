import Conversation from '@/models/Conversation';
import ConversationService from '@/services/ConversationService';
import { ActionContext, ActionTree } from 'vuex';

// initial state
class State {
  items: Conversation[] = [];
  selectedConversation: Conversation | null = null;
}

const getters = {
  GET_CONVERSATIONS: (state: { items: Conversation[] }): Conversation[] => state.items,
  GET_SELECTED_CONVERSATION: (state: { selectedConversation: Conversation }): Conversation => state.selectedConversation,
  GET_NOTIFICATIONS_UNREAD: (state: { items: Conversation[] }): number => state.items.filter((item) => !item.read).length,
};

// actions
const actions: ActionTree<State, any> = {
  FETCH_CONVERSATIONS({ commit }: ActionContext<State, any>) {
    ConversationService.fetchConversations()
      .then((feeds) => commit('STORE_CONVERSATIONS', feeds))
      .catch((e) => console.error(e));
  },
  FETCH_CONVERSATION_MESSAGE({ commit }: ActionContext<State, any>, { id }: { id: number }) {
    ConversationService.fetchConversationMessages(id)
      .then((response: Conversation) => {
        commit('STORE_SELECTED_CONVERSATION', response);
        return response;
      })
      .then((conversation) => commit('MARK_AS_READ', conversation))
      .catch((e) => console.error(e));
  },
  DESTROY_SELECTED_CONVERSATION({ commit }: ActionContext<State, any>) {
    commit('DESTROY_SELECTED_CONVERSATION');
  },
  MARK_AS_READ({ commit }: ActionContext<State, any>, item: Conversation) {
    ConversationService.markAsRead(item)
      .then(() => commit('MARK_AS_READ', item))
      .catch((e) => console.error(e));
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
  MARK_AS_READ(state: { items: Conversation[] }, payload: Conversation) {
    const find = state.items.find((item) => item.id === payload.id);
    if (find) {
      find.read = true;
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
