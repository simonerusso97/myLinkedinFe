import {Attribute} from './attribute';

export interface Structure {
  id: number;
  name: string;
  description: string;
  userType: string;
  attributeList: Attribute[];
  deletable: boolean;
}
