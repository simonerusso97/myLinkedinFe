import {Regular} from './regular';
import {Structure} from './structure';

export interface Post {
  id: number;
  name: string;
  pubblicationDate: Date;
  hide: boolean;
  createdBy: Regular;
  success: boolean;
  structure: Structure;
  err: boolean;
}

