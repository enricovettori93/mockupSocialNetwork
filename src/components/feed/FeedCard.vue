<template>
  <Card class="feedcard">
    <FeedCardContent :feed="feed"></FeedCardContent>
    <div class="feedcard__actions">
      <span @click="setFavorite()"
            class="feedcard__actions-action material-icons"
            :class="{ 'feedcard__actions-action--full': this.feed.hasLike }">{{favorite}}</span>
      <span class="feedcard__actions-action material-icons">forum</span>
      <span class="feedcard__actions-action material-icons">share</span>
    </div>
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from '@/components/common/Card.vue';
import Feed from '@/models/Feed';
import FeedCardContent from '@/components/feed/FeedCardContent.vue';

@Component({
  components: {
    Card,
    FeedCardContent,
  },
})
export default class FeedCard extends Vue {
  @Prop() feed!: Feed;
  public setFavorite() {
    this.$store.dispatch('feed/SET_LIKE_FEED', this.feed);
  }
  get favorite() {
    return (this.feed.hasLike) ? 'favorite' : 'favorite_border';
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins';
$card-padding: ($spacing-xs + $spacing-xxs);

.feedcard {
  &__actions {
    display: flex;

    &-action {
      padding: $card-padding 0px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: color $animation-duration ease-in-out;

      &--full {
        @include bouncein();
        color: red;
      }
    }
  }
}
</style>
