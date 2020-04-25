<template>
  <nav class="navbar">
    <NavBarIcon @click="goTo('feed')"
                :active="isActive(['feed'])">view_day</NavBarIcon>
    <NavBarIcon @click="goTo('messages')"
                :active="isActive(['messages', 'message-detail'])">chat_bubble</NavBarIcon>
    <NavBarIcon @click="goTo('notifications')"
                :active="isActive(['notifications'])">notifications</NavBarIcon>
    <NavBarIcon @click="goTo('account')"
                :active="isActive(['account'])">person</NavBarIcon>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBarIcon from '@/components/navbar/NavBarIcon.vue';

@Component({
  components: {
    NavBarIcon,
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
