<template>
  <div class="mainapp px-lg">
    <router-view class="mainapp__content"></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/navbar/NavBar.vue';
@Component({
  components: {
    NavBar,
  },
})
export default class MainApp extends Vue {

}
</script>

<style scoped lang="scss">
.mainapp {
  display: flex;
  height: calc(100vh - #{$navbar-height});
  width: 100%;
  overflow-y: scroll;

  &__content {
    width: 100%;
  }
}
</style>
