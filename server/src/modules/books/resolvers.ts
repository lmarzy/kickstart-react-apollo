import { booksData, booksDataInterface } from './data';

export const bookResolver = {
  Query: {
    books: (): booksDataInterface[] => booksData,
  },
};
