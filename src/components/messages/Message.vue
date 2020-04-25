<template>
  <Card class="message" :class="isMine ? 'message--mine ml-md' : 'mr-md'">
    <span class="message__text">{{ message.text }}</span>
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MessageConversation from '@/models/MessageConversation';
import Card from '@/components/common/Card.vue';

@Component({
  components: { Card },
})
export default class Message extends Vue {
  @Prop() message!: MessageConversation;

  get isMine() {
    return this.message.writtenBy.id === this.$store.state.user.id;
  }
}
</script>

<style scoped lang="scss">
.message {
  &--mine {
    background-color: $main-azure;
  }
}
</style>
