<template>
  <div class="navbar-icon" :class="{ 'navbar-icon--active':active }">
    <span @click="$emit('click')" class="material-icons">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  @Prop() active!: boolean;
}
</script>

<style scoped lang="scss">
  .navbar-icon {
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
</style>
