<template>
  <div class="card" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";
$card-padding: ($spacing-xs + $spacing-xxs);
.card {
  background-color: $main-grey;
  border-radius: $global-radious;
  padding: $card-padding;
}
</style>
