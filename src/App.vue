<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './views/Login.vue';

@Component({
  components: {
    Login,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
