export interface moviesDataInterface {
  id: number;
  title: string;
  length: number;
}

export const moviesData: moviesDataInterface[] = [
  {
    id: 1000,
    title: 'Lost Boys',
    length: 148,
  },
  {
    id: 10001,
    title: 'Terminator',
    length: 210,
  },
];
