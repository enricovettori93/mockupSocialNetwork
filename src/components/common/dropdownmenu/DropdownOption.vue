<template>
  <div class="dropdown-option" @click="click">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MoreOptions extends Vue {
  protected click(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.$emit('click');
  }
}
</script>

<style scoped lang="scss">

.dropdown-option {
  width: 100%;
  height: 100%;
}
</style>
