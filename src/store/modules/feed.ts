import Feed from '@/models/Feed';
import FeedService from '@/services/FeedService';
import { ActionContext, ActionTree } from 'vuex';

// initial state
class State {
  items: Feed[] = [];
}

const getters = {
  GET_FEEDS: (state: { items: Feed[] }) => state.items,
};

// actions
const actions: ActionTree<State, any> = {
  FETCH_FEEDS({ commit }: ActionContext<State, any>) {
    FeedService.fetchFeeds()
      .then((feeds) => commit('STORE_FEEDS', feeds))
      .catch((e) => console.error(e));
  },
  SET_LIKE_FEED({ commit }: ActionContext<State, any>, item: Feed) {
    FeedService.setLike(item)
      .then(() => commit('SET_LIKE_FEED', item))
      .catch((e) => console.error(e));
  },
};

// mutations
const mutations = {
  STORE_FEEDS(state: { items: Feed[] }, payload: Feed[]) {
    state.items = payload;
  },
  SET_LIKE_FEED(state: { items: Feed[] }, payload: Feed) {
    const find = state.items.find((item) => item.id === payload.id);
    if (find) {
      find.hasLike = !find.hasLike;
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
