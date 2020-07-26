export interface booksDataInterface {
  id: number;
  title: string;
  author: string;
}

export const booksData: booksDataInterface[] = [
  {
    id: 1000,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    id: 1001,
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
  },
];
