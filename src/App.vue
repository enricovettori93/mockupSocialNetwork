<template>
  <div id="app">
    <WhiteOverlay/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WhiteOverlay from '@/components/common/WhiteOverlay.vue';

@Component({
  components: {
    WhiteOverlay,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  display: flex;


  #app {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
}
</style>
