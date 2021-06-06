import {User} from './user';
import {MessageComponent} from './message-component';

export class Message extends MessageComponent{

  constructor(id: number, date: Date, text: string, receivingUser: User, sendingUser: User) {
    super();
    this.id = id;
    this.date = date;
    this.text = text;
    this.receivingUser = receivingUser;
    this.sendingUser = sendingUser;
  }

  id: number;
  date: Date;
  text: string;
  receivingUser: User;
  sendingUser: User;


  showMessage(): void {
    //TODO: implementare
  }

}
