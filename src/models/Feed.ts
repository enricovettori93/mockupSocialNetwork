import User from '@/models/User';
import Comment from '@/models/Comment';

export default interface Feed {
  id: number,
  title: string,
  content: string,
  hasLike: boolean,
  comments?: [Comment],
  createdAt: Date,
  writtenBy: User,
}
