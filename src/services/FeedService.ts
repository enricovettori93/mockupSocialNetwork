import Feed from '@/models/Feed';
import fakeFeeds from '@/mock/fakeFeeds';

export default class FeedService {
  public static fetchFeeds(): Promise<Feed[]> {
    return new Promise((resolve) => {
      resolve(fakeFeeds);
    });
  }

  public static setLike(item: Feed): Promise<void> {
    return Promise.resolve();
  }
}
