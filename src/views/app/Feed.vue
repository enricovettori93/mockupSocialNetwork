<template>
  <div class="feed">
    <h1 class="page-title">{{$t('PAGE_FEED_TITLE')}}</h1>
    <Search class="feed__search"/>
    <NewPost class="feed__newpost my-lg"/>
    <FeedCard class="feed__card my-lg" v-for="item in feeds" :key="item.id" :feed="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import FeedCard from '@/components/feed/FeedCard.vue';
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
}
</style>
