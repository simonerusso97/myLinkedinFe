import {Applicant} from './applicant';
import {CommentComponent} from './comment-component';

export class Comment extends CommentComponent{

  constructor(id: number, date: Date, text: string, applicant: Applicant) {
    super();
    this.id = id;
    this.date = date;
    this.text = text;
    this.applicant = applicant;
  }

  id: number;
  date: Date;
  text: string;
  applicant: Applicant;


  showComment(): any {
    // TODO: IMPLEMENTARE
  }
}
