import {Company} from './company';
import {Message} from './message';

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  birthDay: Date;
  password: string;
  messageList: Message[];
}
