import React from 'react';
import { render } from '@testing-library/react';

import { BooksPage } from './books';

describe('Books Page', () => {
  const { getByText } = render(<BooksPage />);

  test('shows correct page title', () => {
    const pageTitle = getByText('Books Page');
    expect(pageTitle).toBeInTheDocument();
  });
});
