import Feed from '@/models/Feed';
import FeedService from '@/services/FeedService';
import { GetterTree, MutationTree, ActionTree } from 'vuex';

// initial state
class State {
  items: Feed[] = [];
}

const getters = {
  GET_FEEDS: (state: { items: any }) => state.items,
};

// actions
const actions = {
  FETCH_FEEDS({ commit }: any) {
    FeedService.fetchFeeds()
      .then((feeds) => commit('FETCH_FEEDS', feeds))
      .catch((e) => console.error(e));
  },
  SET_LIKE_FEED({ commit }: any, item: Feed) {
    FeedService.setLike(item)
      .then(() => commit('SET_LIKE_FEED', item))
      .catch((e) => console.error(e));
  },
};

// mutations
const mutations = {
  FETCH_FEEDS(state: { items: Feed[] }, payload: Feed[]) {
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
