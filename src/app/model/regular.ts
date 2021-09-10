import {User} from './user';

export interface Regular extends User{
  banned: boolean;
  address: string;
  disabled: boolean;
  degree: string;
}
