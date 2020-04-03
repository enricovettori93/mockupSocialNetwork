<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <Input v-model="login_data.email"
             type="email"
             id="login_email"
             :text="$t('LOGIN_EMAIL')"/>
      <Input v-model="login_data.password"
             type="password"
             id="login_password"
             :text="$t('LOGIN_PASSWORD')"/>
      <Button type="submit">{{$t('LOGIN_BUTTON_GO')}}</Button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/common/inputs/Button.vue';
import Input from '@/components/common/inputs/Input.vue';
import UserService from '@/services/UserService';

@Component({
  components: { Button, Input },
})

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

</style>
