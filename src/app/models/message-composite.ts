import {MessageComponent} from './message-component';

export abstract class MessageComposite extends MessageComponent{
  messageList: MessageComponent[] = [];


  add(c: MessageComponent): void {
    this.messageList.unshift(c);
  }

  remove(c: MessageComponent): void {
    //TODO: DA VERIFICARE
    this.messageList.filter(item => item = c);
  }

  showMessage(): void {
  }
}
