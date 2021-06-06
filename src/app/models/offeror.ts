import { User } from './user';
import {Regular} from './regular';
import {Post} from './post';
import {Company} from './company';

export interface Offeror extends Regular{
  verified: boolean;
  position: string;
  company: Company;
}
