<template>
  <div class="notifications">
    <h1 class="page-title">{{$t('PAGE_NOTIFICATIONS_TITLE')}}</h1>
    <NotificationCard v-for="(item, index) in notifications" :key="index" :notification="item"></NotificationCard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import NotificationCard from '@/components/notification/NotificationCard.vue';

@Component({
  components: {
    NotificationCard,
  },
  computed: {
    ...mapGetters('notifications', {
      notifications: 'GET_NOTIFICATIONS',
    }),
  },
})
export default class Notifications extends Vue {
}
</script>

<style scoped lang="scss">

</style>
