import {User} from "./user";

export interface Message {
  id: number;
  date: Date;
  text: string;
  receivingUser: User;
  sendingUser: User;
}
