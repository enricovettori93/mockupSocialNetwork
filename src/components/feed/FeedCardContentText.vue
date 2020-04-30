<template>
  <div class="feedcardcontenttext">
    <div class="feedcardcontenttext__title">
      {{ feed.writtenBy.name }} {{ feed.writtenBy.surname }}
    </div>
    <div class="feedcardcontenttext__content">
      {{ feed.content }}
    </div>
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
.feedcardcontenttext {
  padding: $card-padding 0px;
  &__title {
    padding-bottom: $card-padding;
    font-weight: bold;
  }
}
</style>
