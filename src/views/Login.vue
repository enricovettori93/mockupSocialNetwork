<template>
  <div class="login">
    <div class="login__content">
      <h1 class="mb-sm">Login</h1>
      <form class="login__content-form" @submit.prevent="login">
        <Input class="py-xs" v-model="login_data.email"
               type="email"
               id="login_email"
               :text="$t('LOGIN_EMAIL')"/>
        <Input class="py-xs" v-model="login_data.password"
               type="password"
               id="login_password"
               :text="$t('LOGIN_PASSWORD')"/>
        <Button class="mt-sm" type="submit">{{$t('LOGIN_BUTTON_GO')}}</Button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserService from '@/services/UserService';

@Component
export default class Login extends Vue {
  login_data = {
    email: '',
    password: '',
  };

  protected login() {
    UserService.login(this.login_data.email, this.login_data.password)
      .then((response) => {
        this.$store.dispatch('user/SET_USER', response);
        this.$router.push({ name: 'main-app' });
      })
      .catch((e) => console.error(e));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    text-align: center;
  }
}
</style>
