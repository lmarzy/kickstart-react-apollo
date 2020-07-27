import { movieResolver } from './resolvers';

describe('books resolver', async () => {
  test('full response', async () => {
    const actualResult = await movieResolver.Query.movies();

    expect(actualResult).toMatchSnapshot();
  });
});
