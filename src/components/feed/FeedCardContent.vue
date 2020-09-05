<template>
  <div class="feedcardcontent">
    <div class="feedcardcontent__title">
      <router-link :to="{ name: 'user-detail', params: { id: feed.writtenBy.id } }">
        {{ feed.writtenBy.name }} {{ feed.writtenBy.surname }}
      </router-link>
    </div>
    <div class="feedcardcontent__content" >
      <template v-if="!isImage">
        <FeedCardContentText :feed="feed"></FeedCardContentText>
      </template>
      <template v-else>
        <FeedCardContentImage :feed="feed"></FeedCardContentImage>
      </template>
    </div>
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
  &__title {
    font-weight: bold;
  }
  &__content {
    padding: $card-padding 0px;
  }
}
</style>
