<template>
  <div class="navbar-icon mx-xxs" :class="{ 'navbar-icon--active':active }">
    <span @click="$emit('click')" class="material-icons">
      <slot></slot>
    </span>
    <span class="navbar-icon__unreadnumber" v-if="hasPendingNotifications">{{pendingnotifications}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  @Prop() active!: boolean;
  @Prop() pendingnotifications?: number;

  get hasPendingNotifications() {
    return !!this.pendingnotifications;
  }
}
</script>

<style scoped lang="scss">
  .navbar-icon {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $navbar-icon-size;
    transition: background-color .2s ease-in-out;
    border-radius: 15px;

    &--active {
      background-color: rgb(185, 185, 185);
    }

    &__unreadnumber {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 20px;
    }
  }
</style>
