import { gql } from '@apollo/client';

export const BOOKS_QUERY = gql`
  query getBooks {
    books {
      id
      title
      author
    }
  }
`;

interface Books {
  id: number;
  title: string;
  author: string;
}

export interface BooksQueryResult {
  books: Books[];
}
