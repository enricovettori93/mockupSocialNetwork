<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <Input v-model="user.email"
             type="email"
             id="login_email"
             :text="$t('LOGIN_EMAIL')"/>
      <Input v-model="user.password"
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
import User from '@/models/User';

@Component({
  components: { Button, Input },
})

export default class Login extends Vue {
  user: User = {
    email: '',
    password: '',
  };

  protected login() {
    UserService.login(this.user.email, this.user.password)
      .then(() => this.$router.push({ name: 'main-app' }))
      .catch((e) => console.error(e));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
