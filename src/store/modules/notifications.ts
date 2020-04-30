import Notification from '@/models/Notification';
import NotificationService from '@/services/NotificationService';
import { ActionContext, ActionTree } from 'vuex';

// initial state
class State {
  items: Notification[] = [];
}

const getters = {
  GET_NOTIFICATIONS: (state: { items: Notification[] }): Notification[] => state.items,
  GET_NOTIFICATIONS_UNREAD: (state: { items: Notification[] }): number => state.items.filter((item) => !item.read).length,
};

// actions
const actions: ActionTree<State, any> = {
  FETCH_NOTIFICATIONS({ commit }: ActionContext<State, any>) {
    NotificationService.fetchNotifications()
      .then((results) => commit('STORE_NOTIFICATIONS', results))
      .catch((e) => console.error(e));
  },
  MARK_AS_READ({ commit }: ActionContext<State, any>, item: Notification) {
    NotificationService.markAsRead(item)
      .then(() => commit('MARK_AS_READ', item))
      .catch((e) => console.error(e));
  },
};

// mutations
const mutations = {
  STORE_NOTIFICATIONS(state: { items: Notification[] }, payload: Notification[]) {
    state.items = payload;
  },
  MARK_AS_READ(state: { items: Notification[] }, payload: Notification) {
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
