import {Regular} from './regular';
import {Company} from './company';

export interface Offeror extends Regular{
  company: Company;
}
