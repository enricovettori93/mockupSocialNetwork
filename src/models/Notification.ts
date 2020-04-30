import User from '@/models/User';

export default interface Notification {
  id: number,
  content: string,
  createdAt: Date,
  user: User,
  read: boolean,
}
