import User from '@/models/User';

export default interface MessageConversation {
  id: number,
  text: string,
  createdAt: Date,
  writtenBy: User,
}
