<template>
  <div class="settings">
    <h1 class="page-title">{{$t('PAGE_SETTINGS_TITLE')}}</h1>
    <div class="settings__avatar">
      <img class="settings__avatar avatar-big" :src="$devGenerateAvatarIconToBeRemoved($store.state.user.id)">
    </div>
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
import UserService from '@/services/UserService';
import LanguageService from '@/services/LanguageService';

@Component({
  components: {
    Card,
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
