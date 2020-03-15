<template>
  <span @click="$emit('click')" class="material-icons">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>

<style scoped lang="scss">
</style>
