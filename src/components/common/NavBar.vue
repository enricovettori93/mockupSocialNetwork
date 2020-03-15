<template>
  <div class="navbar">
    <NavBarIcon @click="goTo('feed')"
                class="navbar__icon">view_day</NavBarIcon>
    <NavBarIcon @click="goTo('messages')"
                class="navbar__icon">chat_bubble</NavBarIcon>
    <NavBarIcon @click="goTo('notifications')"
                class="navbar__icon">notifications</NavBarIcon>
    <NavBarIcon @click="goTo('account')"
                class="navbar__icon">person</NavBarIcon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBarIcon from '@/components/common/NavBarIcon.vue';

@Component({
  components: {
    NavBarIcon,
  },
})
export default class Navbar extends Vue {
  goTo(name: string) {
    this.$router.push({ name });
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.navbar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  background-color: $navbar-background-color;
  z-index: 9999;
  display: flex;
  &__icon {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $navbar-icon-size;
  }
}
</style>
