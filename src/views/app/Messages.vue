<template>
  <div class="messages">
    <h1 class="page-title">{{$t('PAGE_MESSAGES_TITLE')}}</h1>
    <div class="messages__list" :class="isInConversation ? 'messages__list--hidden' : 'messages__list--visible'">
      <ConversationPreview
        class="my-md"
        v-for="item in conversations"
        :key="item.id"
        :conversation="item"
        @select="selectConversation"/>
    </div>
    <div class="messages__chat" :class="!isInConversation ? 'messages__chat--hidden' : 'messages__chat--visible'">
      <div v-if="isInConversation">
        <ConversationDetail/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import ConversationPreview from '@/components/messages/ConversationPreview.vue';
import ConversationDetail from '@/components/messages/ConversationDetail.vue';
import Conversation from '@/models/Conversation';

@Component({
  components: {
    ConversationPreview,
    ConversationDetail,
  },
  computed: {
    ...mapGetters('conversations', {
      conversations: 'GET_CONVERSATIONS',
      selectedConversation: 'GET_SELECTED_CONVERSATION',
    }),
  },
})
export default class Messages extends Vue {
  selectedConversation: Conversation | undefined;

  async created() {
    if (this.$route.params.id) {
      this.fetchMessages();
    } else {
      this.fetchConversations();
    }
  }

  beforeDestroy(): void {
    this.$store.dispatch('conversations/DESTROY_SELECTED_CONVERSATION');
  }

  get isInConversation(): boolean {
    return !!this.selectedConversation && this.$router.currentRoute.name === 'message-detail';
  }

  protected selectConversation(conversation: Conversation): void {
    this.$router.push({ name: 'message-detail', params: { id: `${conversation.id}` } });
  }

  private fetchMessages(): void {
    this.$store.dispatch('conversations/FETCH_CONVERSATION_MESSAGE', { id: parseInt(this.$route.params.id, 10) });
  }

  private fetchConversations(): void {
    this.$store.dispatch('conversations/DESTROY_SELECTED_CONVERSATION');
    this.$store.dispatch('conversations/FETCH_CONVERSATIONS');
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    if (newVal.name === 'message-detail' && newVal.params && newVal.params.id) {
      this.fetchMessages();
    } else if (newVal.name === 'messages') {
      this.fetchConversations();
    }
  }
}
</script>

<style scoped lang="scss">
.messages {
  height: 100%;

  &__list {
    &--hidden {
      opacity: 0;
      visibility: hidden;
      transform: scale(.94);
      max-height: 0;
      transition:
        opacity .15s ease,
        visibility .15s ease,
        transform .15s ease,
        max-height 0s ease .15s;
    }
    &--visible {
      opacity: 1;
      visibility: visible;
      transform: none;
      max-height: 100%;
      transition:
        opacity .15s ease,
        visibility .15s ease,
        transform .15s ease;
    }
  }
  &__chat {
    &--hidden {
      position: absolute;
      top: 0; left: 0;
      opacity: 0;
      max-height: 0;
      visibility: hidden;
      transform: translate(100%, 0);
      transition:
        opacity .15s ease,
        visibility .15s ease,
        transform .15s ease,
        max-height 0s ease .15s;
    }
    &--visible {
      position: relative;
      opacity: 1;
      visibility: visible;
      transform: none;
      max-height: 100%;
      transition:
        opacity .15s ease .15s,
        visibility .15s ease .15s,
        transform .3s cubic-bezier(.1, 1, .1, 1) .15s;
    }
  }
}
</style>
