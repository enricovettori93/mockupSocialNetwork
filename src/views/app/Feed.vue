<template>
  <div class="feed">
    <Search class="feed__search"/>
    <NewPost class="feed__newpost"/>
    <FeedCard class="feed__card" v-for="item in feeds" :key="item.id" :feed="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import FeedCard from '@/components/feed/feedcard/FeedCard.vue';
import NewPost from '@/components/feed/NewPost.vue';
import Search from '@/components/feed/Search.vue';

@Component({
  components: { FeedCard, NewPost, Search },
  computed: {
    ...mapGetters('feed', {
      feeds: 'GET_FEEDS',
    }),
  },
})
export default class Feed extends Vue {
  created() {
    this.$store.dispatch('feed/FETCH_FEEDS');
  }
}
</script>

<style scoped lang="scss">
.feed {
  margin-bottom: 100px;
  position: relative;

  &__newpost, &__card, &__search {
    margin: 30px;
  }
  &__newpost {
    margin-top: 110px;
  }
}
</style>
