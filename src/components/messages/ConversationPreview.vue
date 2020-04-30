<template>
    <Card @click="$emit('select', conversation)">
      <DropdownMenuOptions class="card-menu">
        <DropdownOption>{{$t('BLOCK_USER')}}</DropdownOption>
        <DropdownOption>{{$t('DELETE')}}</DropdownOption>
      </DropdownMenuOptions>
      <div class="conversation-preview">
        <div class="conversation-preview__title">
            <img class="conversation-preview__title-avatar avatar-small" :src="$devGenerateAvatarIconToBeRemoved(conversation.user.id)">
            <span class="conversation-preview__title-name ml-xs">{{ conversation.user.name }} {{ conversation.user.surname }}</span>
        </div>
        <div class="conversation-preview__content mt-xs">
          <span>
            {{ previewTextConversation }}
          </span>
        </div>
      </div>
    </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Conversation from '@/models/Conversation';
import Card from '@/components/common/Card.vue';
import DropdownMenuOptions from '@/components/common/dropdownmenu/DropdownMenuOptions.vue';
import DropdownOption from '@/components/common/dropdownmenu/DropdownOption.vue';

@Component({
  components: { Card, DropdownMenuOptions, DropdownOption },
})
export default class ConversationPreview extends Vue {
  @Prop() conversation!: Conversation;

  get previewTextConversation(): string {
    const limit = 75;
    return ((this.conversation.messages[this.conversation.messages.length - 1].text).length > limit)
      ? `${(this.conversation.messages[this.conversation.messages.length - 1].text).substring(0, limit)}...`
      : this.conversation.messages[this.conversation.messages.length - 1].text;
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.card-menu {
  padding: $card-padding;
}
.conversation-preview {
  display: flex;
  flex-direction: column;
  &__title {
    display: flex;
    align-items: center;
    &-name {
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
