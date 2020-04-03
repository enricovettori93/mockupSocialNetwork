import Vue from 'vue';
import Router from 'vue-router';
import VueI18n from 'vue-i18n';
import { sync } from 'vuex-router-sync';
import routes from '@/routes';
import store from '@/store/store';
import App from './App.vue';

import constants from '@/constants';

// Style
import 'bulma/css/bulma.css';
import 'material-icons/iconfont/material-icons.scss';
import './styles/app.scss';

// i18n
import messages from './translations/it';

// tslint:disable no-var-requires
const vClickOutside = require('v-click-outside');

// Router
const router = new Router();
router.addRoutes(routes);

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(Router);
Vue.use(vClickOutside);

Vue.prototype.$devGenerateAvatarIconToBeRemoved = (id: number) => {
  // @ts-ignore
  return `https://image.flaticon.com/icons/svg/145/${id % 9 === 0 ?'145843':id % 9 === 1 ?'145847':id % 9 === 2 ?'145848':id % 9 === 3 ?'145849':id % 9 === 4 ?'145850':id % 9 === 5 ?'145846':id % 9 === 6 ?'145844':id % 9 === 7 ?'145845':'145842'}.svg`;
};

sync(store, router);

function clearLoginData() {
  localStorage.clear();
}

router.beforeEach((to, from, next) => {
  if ( ['login'].includes(<string>to.name) ) {
    if (localStorage.getItem(constants.LOCALSTORAGE_TOKEN_KEY)) {
      next({ path: '/' });
      return;
    }
    next();
    return;
  }
  if (!localStorage.getItem(constants.LOCALSTORAGE_TOKEN_KEY)) {
    clearLoginData();
    next({ name: 'login' });
    return;
  }
  next();
});

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
