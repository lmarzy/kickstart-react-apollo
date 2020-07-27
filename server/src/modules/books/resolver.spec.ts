import { bookResolver } from './resolvers';

describe('books resolver', async () => {
  test('full response', async () => {
    const actualResult = await bookResolver.Query.books();

    expect(actualResult).toMatchSnapshot();
  });
});
