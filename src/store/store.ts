import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import feed from '@/store/modules/feed';
import conversations from '@/store/modules/conversations';
import ui from '@/store/modules/ui';
import user from '@/store/modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    feed,
    conversations,
    user,
  },
  plugins: [
    createPersistedState({
      key: 'mockup-social-network',
      paths: [ // list of modules saved in local-storage
        'user',
      ],
    }),
  ],
});
