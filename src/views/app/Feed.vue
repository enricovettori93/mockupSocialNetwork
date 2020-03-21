<template>
  <div class="feed">
    <NewPost class="feed__newpost"/>
    <FeedCard class="feed__card" v-for="item in feeds" :key="item.id" :feed="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import FeedCard from '@/components/common/feedcard/FeedCard.vue';
import NewPost from '@/components/common/NewPost.vue';

@Component({
  components: { FeedCard, NewPost },
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
  &__newpost, &__card {
    margin: 30px;
  }
}
</style>
