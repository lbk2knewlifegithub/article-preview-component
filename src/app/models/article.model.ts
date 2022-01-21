import { Author } from './author.model';

export interface Article {
  image: string;
  title: string;
  content: string;
  author: Author;
}
