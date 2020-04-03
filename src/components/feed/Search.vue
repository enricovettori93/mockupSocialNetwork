<template>
  <div class="search"
       :class="active ? 'search--active' : 'search--notactive'"
       v-click-outside="hide"
       @click="activate(true)">
    <form action="#">
      <span class="search__icon material-icons">search</span>
      <Input class="search__input"/>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/common/inputs/Input.vue';

@Component({
  components: { Input },
})
export default class Search extends Vue {
  active = false;

  activate(newstatus: boolean) {
    this.active = newstatus;
    this.$store.dispatch('ui/UPDATE_WHITE_OVERLAY_STATUS', {
      status: newstatus,
    });
  }

  hide() {
    this.activate(false);
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/zindex";
$min-width: 50px;

.search {
  border-radius: $global-radious;
  border: 2px solid $main-grey;
  height: 50px;
  min-width: $min-width;
  transition: width $animation-duration-speed ease-in-out;
  padding: 10px;
  z-index: $z-index-search;
  position: absolute;
  right: 0;
  top: 10px;

  form {
    display: flex;
  }

  &__icon {
    font-size: 25px;
  }

  &--notactive {
    width: $min-width;
    .search {
      &__input {
        opacity: 0;
        width: 0px;
      }
    }
  }

  &--active {
    width: 100%;
    .search {
      &__input {
        opacity: 1;
        width: 100%;
      }
    }
  }
}
</style>
