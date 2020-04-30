<template>
  <Card @click="markAsRead()" class="notificationcard my-sm" :class="{ 'notificationcard--unread': !notification.read }">
    <img class="notificationcard__avatar avatar-small" :src="$devGenerateAvatarIconToBeRemoved(notification.user.id)">
    <div class="notificationcard__content ml-xs">
      <span class="notificationcard__content-name">
        {{notification.user.name}} {{notification.user.surname}}
      </span>
      <span class="notificationcard__content-text">
        {{previewTextConversation}}
      </span>
    </div>
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Notification from '@/models/Notification';
import Card from '@/components/common/Card.vue';
@Component({
  components: {
    Card,
  },
})
export default class FeedCard extends Vue {
  @Prop() notification!: Notification;

  protected markAsRead() {
    this.$store.dispatch('notifications/MARK_AS_READ', this.notification);
  }

  get previewTextConversation(): string {
    const limit = 90;
    return ((this.notification.content).length > limit)
      ? `${(this.notification.content).substring(0, limit)}...`
      : this.notification.content;
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/mixins';
$card-padding: ($spacing-xs + $spacing-xxs);

.notificationcard {
  display: flex;
  align-items: flex-start;
  transition: background-color $animation-duration-speed linear;

  &--unread {
    background-color: $navbar-background-color;
  }

  &__content {
    display: flex;
    flex-direction: column;
    &-name {
      font-weight: bold;
    }
    &-text {
      font-weight: 300;
      font-size: 14px;
    }
  }
}
</style>
