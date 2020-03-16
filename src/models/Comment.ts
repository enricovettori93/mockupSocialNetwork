import User from '@/models/User';

export default interface Comment {
  id: number,
  content: string,
  createdAt: Date,
  writtenBy: User,
}
