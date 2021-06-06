import { CommentComponent } from './comment-component';
import {Message} from './message';

export class CommentComposite extends CommentComponent{

  commentList: CommentComponent[] = [];

  add(c: CommentComponent): void {
    this.commentList.unshift(c);
  }

  remove(c: CommentComponent): void{
    //TODO: DA VERIFICARE
    this.commentList.filter(item => item = c);
  }

  showComment(): void {
  }
}
