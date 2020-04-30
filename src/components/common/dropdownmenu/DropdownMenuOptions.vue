<template>
  <div class="dropdown-menu-options" v-click-outside="hide">
    <span class="dropdown-menu-options__actions-action material-icons" @click="toggle">more_vert</span>
    <div class="dropdown-menu-options__slots" :class="visible ? 'dropdown-menu-options__slots--visible' : 'dropdown-menu-options__slots--invisible'">
      <slot @click="$emit('click')"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MoreOptions extends Vue {
  visible = false;

  protected toggle(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.visible = !this.visible;
  }

  protected hide(): void {
    this.visible = false;
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/zindex";
@import "../../../styles/variables";
$transition-speed: .1s;

.dropdown-menu-options {
  position: absolute;
  text-align: right;
  right: 0;
  top: 0;
  z-index: $z-index-dropdown-dots;

  &__slots {
    z-index: $z-index-dropdown-items;
    border-radius: 10px;
    background: white;
    box-shadow: $global-box-shadow;
    text-align: left;
    width: 40vw;
    transition:
      transform $transition-speed linear,
      visibility $transition-speed linear,
      opacity $transition-speed linear;

    &--visible {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
    &--invisible {
      transform: scale(.8);
      opacity: 0;
      visibility: hidden;
    }

    > div {
      padding: $spacing-sm;

      &:not(:last-child) {
        border-bottom: 1px $main-grey solid;
      }
    }
  }
}
</style>
