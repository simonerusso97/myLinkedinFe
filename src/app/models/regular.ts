import {User} from './user';
import {Post} from './post';

export interface Regular extends User{
  banned: boolean;
  address: string;
  disable: boolean;
  degree: string;
  interestedPostList: Post[];
  createdPostList: Post[];
}
