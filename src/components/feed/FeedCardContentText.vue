<template>
  <div class="feedcardcontenttext">
    {{ feed.content }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Feed from '@/models/Feed';

@Component
export default class FeedCardContentText extends Vue {
  @Prop() feed!: Feed;

  get isImage(): boolean {
    return this.feed.type === 'image';
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins';
@import '../../styles/variables';
$card-padding: ($spacing-xs + $spacing-xxs);
</style>
