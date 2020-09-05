<template>
  <div class="user">
    <UserHero :user="currentUser"></UserHero>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/common/Card.vue';
import UserHero from '@/components/common/UserHero.vue';
import CompleteUser from '@/models/CompleteUser';
import UserService from '@/services/UserService';

@Component({
  components: {
    Card,
    UserHero,
  },
})
export default class User extends Vue {
  protected currentUser: CompleteUser | {} = {};

  created() {
    this.fetchUser();
  }

  async fetchUser() {
    await UserService.fetchUser(parseInt(this.$route.params.id, 10))
      .then((response) => { this.currentUser = response; })
      .catch((err) => console.error(err));
  }
}
</script>

<style scoped lang="scss">
.user {
}
</style>
