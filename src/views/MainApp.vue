<template>
  <div class="mainapp">
    <router-view></router-view>
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
}
</style>
