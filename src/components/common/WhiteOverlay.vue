<template>
  <div class="whiteoverlay" :class="visible ? 'whiteoverlay--visible' : 'whiteoverlay--invisible'">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters('ui', {
      visible: 'GET_WHITE_OVERLAY_STATUS',
    }),
  },
})
export default class Navbar extends Vue {
}
</script>

<style scoped lang="scss">
@import "../../styles/zindex";
@import "../../styles/variables";

.whiteoverlay {
  width: 100vh;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.97);
  position: fixed;
  margin: 0;
  padding: 0;
  z-index: $z-index-search-overlay;
  transition:
    opacity $animation-duration-speed ease-in-out,
    visibility $animation-duration-speed ease-in-out;

  &--visible {
    opacity: 1;
    visibility: visible;
  }
  &--invisible {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
