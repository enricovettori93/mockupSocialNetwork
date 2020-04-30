<template>
  <div class="feedcardcontentimage">
    <div class="feedcardcontentimage__title">
      {{ feed.writtenBy.name }} {{ feed.writtenBy.surname }}
    </div>
    <div  @click="toggleFullScreen( $event,false)" class="feedcardcontentimage__content" :class="isFullScreen ? 'feedcardcontentimage__content--fullscreen' : 'feedcardcontentimage__content--nofullscreen'">
      <span @click="toggleFullScreen( $event,false)" class="material-icons feedcardcontentimage__content-close">close</span>
      <img @click="toggleFullScreen( $event,true)" :src="feed.url" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Feed from '@/models/Feed';

@Component
export default class FeedCardContentImage extends Vue {
  @Prop() feed!: Feed;

  protected isFullScreen = false;

  protected toggleFullScreen(e: Event, newstate?: boolean): void {
    e.preventDefault();
    e.stopPropagation();
    this.isFullScreen = newstate || !this.isFullScreen;
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins';
@import '../../styles/variables';
@import '../../styles/zindex';

$card-padding: ($spacing-xs + $spacing-xxs);

.feedcardcontentimage {
  margin: 0 (-($spacing-sm - $spacing-xxs));
  &__title {
    font-weight: bold;
    position: absolute;
    color: white;
    padding: $card-padding 0px 0px $card-padding;
  }

  &__content {
    &-close {
      display: none;
    }
    &--fullscreen {
      @include fadein();
      .feedcardcontentimage__content-close {
        display: initial;
        position: absolute;
        top: 10px;
        right: 10px;
        color: white;
      }
      position: fixed;
      top: 0px;
      width: 100vw;
      height: 100vh;
      left: 0px;
      background: black;
      z-index: $z-index-imgfullscreen;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
