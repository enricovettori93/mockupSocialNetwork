import Vue from 'vue';
import Vuex from 'vuex';
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
});
