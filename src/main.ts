import Vue from 'vue';
import Router from 'vue-router';
import VueI18n from 'vue-i18n';
import { sync } from 'vuex-router-sync';
import routes from '@/routes';
import store from '@/store/store';
import App from './App.vue';

// Style
import 'bulma/css/bulma.css';
import 'material-icons/iconfont/material-icons.scss';
import '@/styles/_helpers.scss';

// i18n
import messages from './translations/it';

// Router
const router = new Router();
router.addRoutes(routes);

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(Router);

sync(store, router);

const i18n = new VueI18n({
  locale: 'it',
  messages,
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
