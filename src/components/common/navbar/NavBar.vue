<template>
  <div class="navbar">
    <NavBarIcon @click="goTo('feed')"
                class="navbar__icon"
                :class="{ 'navbar__icon--active': this.isActive('feed') }">view_day</NavBarIcon>
    <NavBarIcon @click="goTo('messages')"
                class="navbar__icon"
                :class="{ 'navbar__icon--active': this.isActive('messages') }">chat_bubble</NavBarIcon>
    <NavBarIcon @click="goTo('notifications')"
                class="navbar__icon"
                :class="{ 'navbar__icon--active': this.isActive('notifications') }">notifications</NavBarIcon>
    <NavBarIcon @click="goTo('account')"
                class="navbar__icon"
                :class="{ 'navbar__icon--active': this.isActive('account') }">person</NavBarIcon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBarIcon from '@/components/common/navbar/NavBarIcon.vue';

@Component({
  components: {
    NavBarIcon,
  },
})
export default class Navbar extends Vue {
  goTo(name: string) {
    this.$router.push({ name });
  }

  isActive(name: string) {
    return name === this.$store.state.route.name;
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/variables";
.navbar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
  background-color: $navbar-background-color;
  z-index: 10;
  display: flex;

  &__icon {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $navbar-icon-size;
    transition: background-color .2s ease-in-out;
    margin: 10px;
    border-radius: 40px;

    &--active {
      background-color: rgb(185, 185, 185);
    }
  }
}
</style>
