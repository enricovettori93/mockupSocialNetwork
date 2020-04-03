import MessageConversation from '@/models/MessageConversation';
import User from '@/models/User';

export default interface Conversation {
  id: number,
  createdAt: Date,
  messages: MessageConversation[],
  user: User,
}
