<template>
    <div class="conversation-detail">
      <div class="conversation-detail__user mb-md py-xs">
        <img class="conversation-detail__user-avatar avatar-small" :src="$devGenerateAvatarIconToBeRemoved(selectedConversation.user.id)">
        <span class="conversation-detail__user-detail ml-xs">
          <span class="conversation-detail__user-detail-name">{{ selectedConversation.user.name }} {{ selectedConversation.user.surname }}</span>
          <span class="conversation-detail__user-detail-lastview">{{ $t('MESSAGE_DETAIL_LAST_VIEW', { login: 'oggi alle 10:30' }) }}</span>
        </span>
      </div>
      <Message v-for="(item, index) in selectedConversation.messages"
        :key="index"
        :message="item"/>
      <div class="conversation-detail__newmessage p-xs">
        <Input :type="'textarea'" class="conversation-detail__newmessage--input"/>
        <span class="conversation-detail__newmessage--icon material-icons ml-xs">send</span>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/components/messages/Message.vue';

import { mapGetters } from 'vuex';

@Component({
  components: { Message },
  computed: {
    ...mapGetters('conversations', {
      selectedConversation: 'GET_SELECTED_CONVERSATION',
    }),
  },
})
export default class ConversationDetail extends Vue {
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins';
@import '../../styles/zindex';

.conversation-detail {
  position: relative;
  &__user {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: $z-index-user-msg;
    background-color: white;
    margin-left: (-$spacing-xl);
    margin-right: (-$spacing-md);
    padding: 0 $spacing-xl;

    &-detail {
      display: flex;
      flex-direction: column;
      &-name {
        font-weight: bold;
      }
      &-lastview {
        font-weight: 100;
        font-size: 12px;
      }
    }
  }
  &__newmessage {
    @include main-border();
    position: sticky;
    bottom: 10px;
    display: flex;
    background-color: white;
    &--input {
      flex: 1;
    }
  }
}
</style>
