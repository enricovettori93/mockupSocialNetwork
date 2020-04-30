import Notification from '@/models/Notification';
import fakeNotifications from '@/mock/fakeNotification';

export default class NotificationService {
  public static fetchNotifications(): Promise<Notification[]> {
    return new Promise((resolve) => {
      resolve(fakeNotifications);
    });
  }

  public static markAsRead(notification: Notification): Promise<void> {
    return Promise.resolve();
  }
}
