import {Regular} from './regular';
import {Company} from './company';
import {JsonDocument} from './json-document';
import {Structure} from './structure';
import {Skill} from './skill';
import {Applicant} from './applicant';

export interface Post {
  id: number;
  name: string;
  repost: number;
  pubblicationDate: Date;
  hide: boolean;
  interestedRegularList: Regular[];
  company: Company;
  jsonDocument: JsonDocument;
  structure: Structure;
  skillList: Skill[];
  candidationApplicantList: Applicant[];
  createdBy: Regular;
}
