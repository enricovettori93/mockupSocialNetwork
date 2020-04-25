<template>
  <div class="newpost">
    <img class="newpost__user avatar-normal" :src="$devGenerateAvatarIconToBeRemoved($store.state.user.id)">
    <div class="newpost__inputarea">
      <form @submit.prevent="doPost">
        <Input v-model="post"
               type="text"
               :text="$t('NEW_POST')"
               id="new_post"/>
        <Button class="mt-xs">{{$t('NEW_POST_SUBMIT')}}</Button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewPost extends Vue {
  post = '';
  doPost() {
    console.log('Write new post: ', this.post);
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins';
$margin-user: ($avatar-normal / 2) + 10px;

.newpost {
  @include main-border();
  text-align: center;
  padding: 10px;

  &__user {
    z-index: 1;
    margin-top: -$margin-user;
  }
}
</style>
