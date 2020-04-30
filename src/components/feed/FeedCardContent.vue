<template>
  <div class="feedcardcontent">
    <template class="feedcardcontent__content" v-if="!isImage">
      <FeedCardContentText :feed="feed"></FeedCardContentText>
    </template>
    <template class="feedcardcontent__content" v-else>
      <FeedCardContentImage :feed="feed"></FeedCardContentImage>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Feed from '@/models/Feed';
import FeedCardContentImage from '@/components/feed/FeedCardContentImage.vue';
import FeedCardContentText from '@/components/feed/FeedCardContentText.vue';

@Component({
  components: {
    FeedCardContentImage,
    FeedCardContentText,
  },
})
export default class FeedCardContent extends Vue {
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
.feedcardcontent {
}
</style>
