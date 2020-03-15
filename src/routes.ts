import Login from '@/views/Login.vue';
import MainApp from '@/views/MainApp.vue';
import Feed from '@/views/app/Feed.vue';
import Messages from '@/views/app/Messages.vue';
import Notifications from '@/views/app/Notifications.vue';
import Settings from '@/views/app/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'login' },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/app',
    name: 'main-app',
    component: MainApp,
    redirect: { name: 'feed' },
    children: [
      {
        path: '/app/feed',
        name: 'feed',
        component: Feed,
      },
      {
        path: '/app/messages',
        name: 'messages',
        component: Messages,
      },
      {
        path: '/app/notifications',
        name: 'notifications',
        component: Notifications,
      },
      {
        path: '/app/settings',
        name: 'account',
        component: Settings,
      },
    ],
  },
];

export default routes;
