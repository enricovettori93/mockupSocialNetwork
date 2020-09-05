<template>
  <nav class="navbar py-xxs">
    <NavBarIcon @click="goTo('feed')"
                :active="isActive(['feed'])">view_day</NavBarIcon>
    <NavBarIcon @click="goTo('messages')"
                :pendingnotifications="conversationsUnread"
                :active="isActive(['messages', 'message-detail'])">chat_bubble</NavBarIcon>
    <NavBarIcon @click="goTo('notifications')"
                :pendingnotifications="notificationsUnread"
                :active="isActive(['notifications'])">notifications</NavBarIcon>
    <NavBarIcon @click="goTo('account')"
                :active="isActive(['account'])">person</NavBarIcon>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import NavBarIcon from '@/components/navbar/NavBarIcon.vue';

@Component({
  components: {
    NavBarIcon,
  },
  computed: {
    ...mapGetters('conversations', {
      conversationsUnread: 'GET_NOTIFICATIONS_UNREAD',
    }),
    ...mapGetters('notifications', {
      notificationsUnread: 'GET_NOTIFICATIONS_UNREAD',
    }),
  },
})
export default class Navbar extends Vue {
  goTo(name: string) {
    if (this.$router.currentRoute.name !== name) {
      this.$router.push({ name });
    }
  }

  isActive(routes: string[]) {
    return routes.includes(this.$store.state.route.name);
  }
}
</script>

<style scoped lang="scss">
  @import "../../styles/zindex";
.navbar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: $navbar-height;
  background-color: $navbar-background-color;
  z-index: $z-index-navbar;
  display: flex;
  margin: 0 (-$spacing-lg);
}
</style>
