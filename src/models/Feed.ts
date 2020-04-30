import User from '@/models/User';
import Comment from '@/models/Comment';

type FeedTypes = 'post' | 'image';

export default interface Feed {
  id: number,
  title: string,
  type: FeedTypes,
  url?: string,
  content: string,
  hasLike: boolean,
  comments?: Comment[],
  createdAt: Date,
  writtenBy: User,
}
