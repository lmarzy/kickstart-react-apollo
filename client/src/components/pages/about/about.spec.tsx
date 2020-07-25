import React from 'react';
import { render } from '@testing-library/react';

import { AboutPage } from './about';

describe('Home Page', () => {
  const { getByText } = render(<AboutPage />);

  test('shows about page', () => {
    expect(getByText('About Page')).toBeInTheDocument();
  });
});
