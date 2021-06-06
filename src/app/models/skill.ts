import {Post} from './post';
import {Applicant} from './applicant';

export interface Skill {
  id: number;
  name: string;
  description: string;
  postList: Post[];
  applicantList: Applicant[];
}
