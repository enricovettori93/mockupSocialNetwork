<template>
  <div class="feed">
    <FeedCard v-for="item in feeds" :key="item.id" :feed="item"></FeedCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import FeedCard from '@/components/common/feedcard/FeedCard.vue';

@Component({
  components: { FeedCard },
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
}
</style>
