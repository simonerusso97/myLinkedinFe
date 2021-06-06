import { User } from './user';
import {Regular} from './regular';
import {Skill} from './skill';
import {Post} from './post';
import {Comment} from './comment';

export interface Applicant extends Regular{
  skillList: Skill[];
  candidationPostList: Post[];
  commentList: Comment[];
}
