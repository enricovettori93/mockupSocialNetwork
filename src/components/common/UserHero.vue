<template>
  <div class="userhero">
    <img class="userhero__avatar avatar-big mt-xs" :src="$devGenerateAvatarIconToBeRemoved(user.id)">
    <span class="userhero__name">{{ user.name }} {{ user.surname }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import User from '@/models/User';
import CompleteUser from '@/models/CompleteUser';

@Component
export default class Card extends Vue {
  @Prop() user!: User | CompleteUser;
}
</script>

<style scoped lang="scss">
.userhero {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__name {
    font-weight: bold;
    font-size: 30px;
  }
}
</style>
