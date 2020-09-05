<template>
  <div class="settings">
    <h1 class="page-title">{{$t('PAGE_SETTINGS_TITLE')}}</h1>
    <UserHero :user="getCurrentUser()"/>
    <div class="settings__items">
      <Card class="my-sm">{{$t('PRIVACY')}}</Card>
      <Card class="my-sm" @click="changeLanguage()">{{$t('LANGUAGE')}}</Card>
      <Card class="my-sm" @click="logout()">{{$t('LOGOUT')}}</Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/common/Card.vue';
import UserHero from '@/components/common/UserHero.vue';
import UserService from '@/services/UserService';
import LanguageService from '@/services/LanguageService';
import User from '@/models/User';

@Component({
  components: {
    Card,
    UserHero,
  },
})
export default class Settings extends Vue {
  protected changeLanguage(): void {
    LanguageService.switchLanguage(this);
  }

  protected logout(): void {
    UserService.logout()
      .then(() => location.reload());
  }

  protected getCurrentUser(): User {
    return UserService.getUser();
  }
}
</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;

  &__avatar {
    text-align: center;
  }
}
</style>
