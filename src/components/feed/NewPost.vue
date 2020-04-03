<template>
  <div class="newpost">
    <img class="newpost__user avatar-normal" :src="$devGenerateAvatarIconToBeRemoved($store.state.user.id)">
    <div class="newpost__inputarea">
      <form @submit.prevent="doPost">
        <Input v-model="post"
               type="text"
               :text="$t('NEW_POST')"
               id="new_post"/>
        <Button>{{$t('NEW_POST_SUBMIT')}}</Button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Input from '@/components/common/inputs/Input.vue';
import Button from '@/components/common/inputs/Button.vue';

@Component({
  components: { Input, Button },
})
export default class NewPost extends Vue {
  post = '';
  doPost() {
    console.log('Write new post: ', this.post);
  }
}
</script>

<style scoped lang="scss">
$margin-user: ($avatar-normal / 2) + 10px;

.newpost {
  border-radius: $global-radious;
  border: 2px solid $main-grey;
  text-align: center;
  padding: 10px;

  &__user {
    z-index: 1;
    margin-top: -$margin-user;
  }
}
</style>
