<template>
  <Card class="feedcard">
    <div class="feedcard__title">
      {{ feed.title }}
    </div>
    <div class="feedcard__content">
      {{ feed.content }}
    </div>
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

@Component({
  components: {
    Card,
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
// FIXME: use margin/padding helpers
@import '../../../styles/mixins';

.feedcard {
  &__title {
    padding: 10px;
    font-weight: bold;
  }
  &__content {
    padding: 10px;
  }
  &__actions {
    display: flex;

    &-action {
      padding: 10px;
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
