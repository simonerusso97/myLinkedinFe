import {Post} from './post';

export interface JsonDocument {
  id: number;
  name: string;
  post: Post;
}
