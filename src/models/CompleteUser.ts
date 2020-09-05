import User from '@/models/User';
import Feed from '@/models/Feed';

export default interface CompleteUser extends User {
  birthday: Date,
  isWorking?: boolean;
  works?: string[],
  isStudying?: boolean,
  studies?: string[],
  posts?: Feed[],
}
