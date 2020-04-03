<template>
    <Card>
      <div class="conversation-preview">
        <div class="conversation-preview__title">
            <img class="conversation-preview__title-avatar avatar-small" :src="$devGenerateAvatarIconToBeRemoved(conversation.user.id)">
            <span class="conversation-preview__title-text ml-xs">{{ conversation.user.name }} {{ conversation.user.surname }}</span>
        </div>
        <div class="conversation-preview__content mt-xs">
          <span>
            {{ conversation.messages[conversation.messages.length - 1].text }}
          </span>
        </div>
      </div>
    </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Conversation from '@/models/Conversation';
import Card from '@/components/common/Card.vue';

@Component({
  components: { Card },
})
export default class ConversationPreview extends Vue {
  @Prop() conversation!: Conversation;
}
</script>

<style scoped lang="scss">
$card-padding: ($spacing-xs + $spacing-xxs);
.conversation-preview {
  display: flex;
  flex-direction: column;
  padding: $card-padding;
  &__title {
    display: flex;
    align-items: center;
    &-text {
      font-weight: bold;
    }
  }
  &__content {
    flex: 1;
    &-title {
      font-weight: bold;
    }
  }
}
</style>
