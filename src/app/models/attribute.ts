import {Structure} from './structure';

export interface Attribute {
  id: number;
  name: string;
  type: string;
  structureList?: Structure[];
  isModifing: boolean;
}
