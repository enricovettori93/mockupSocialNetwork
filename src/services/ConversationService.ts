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
      // (response) ? resolve(response) : reject(); fucking tslint
      if (response) {
        resolve(response);
      } else {
        reject(new Error(`Can't find conversation ${id}`));
      }
    });
  }
}
