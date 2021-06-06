import {Offeror} from './offeror';
import {Post} from './post';

export interface Company {
  id: number;
  name: string;
  sector: string;
  password: string;
  offerorList: Offeror[];
  postList: Post[];


}
