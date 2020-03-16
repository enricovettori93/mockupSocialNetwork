<template>
  <div class="card m-3">
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
.card {
  background-color: $card-background-color;
  border-radius: $global-radious;
}
</style>
