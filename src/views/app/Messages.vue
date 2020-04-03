<template>
  <div class="messages">
    <h1 class="page-title">{{$t('PAGE_MESSAGES_TITLE')}}</h1>
    <ConversationPreview
      class="my-md"
      v-for="item in conversations"
      :key="item.id"
      :conversation="item"></ConversationPreview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import ConversationPreview from '@/components/conversations/ConversationPreview.vue';

@Component({
  components: {
    ConversationPreview,
  },
  computed: {
    ...mapGetters('conversations', {
      conversations: 'GET_CONVERSATIONS',
    }),
  },
})
export default class Messages extends Vue {
  created() {
    this.$store.dispatch('conversations/FETCH_CONVERSATIONS');
  }
}
</script>

<style scoped lang="scss">

</style>
