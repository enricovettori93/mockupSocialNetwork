import Conversation from '@/models/Conversation';
import fakeConversations from '@/mock/fakeConversation';

export default class FeedService {
  public static fetchConversations(): Promise<Conversation[]> {
    return new Promise((resolve) => {
      resolve(fakeConversations);
    });
  }

  public static fetchConversationMessages(id: number): Promise<Conversation> {
    return new Promise((resolve, reject) => {
      const response = fakeConversations.find((item) => item.id === id);
      (response) ? resolve(response) : reject();
    });
  }

  public static markAsRead(notification: Conversation): Promise<void> {
    return Promise.resolve();
  }
}
