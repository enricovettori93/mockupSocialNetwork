<template>
  <button @click="$emit('click')" class="button" :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private type!: string;
}
</script>

<style scoped lang="scss">

</style>
