import React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from './home';

describe('Home Page', () => {
  const { getByText } = render(<HomePage />);

  test('shows home page', () => {
    const tst = getByText('Home Page');
    expect(tst).toBeInTheDocument();
  });
});
