import Conversation from '@/models/Conversation';
import fakeConversations from '@/mock/fakeConversation';

export default class FeedService {
  public static fetchConversations(): Promise<Conversation[]> {
    return new Promise((resolve) => {
      resolve(fakeConversations);
    });
  }
}
