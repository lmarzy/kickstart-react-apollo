import React, { ReactElement } from 'react';

import { Books } from 'sections';
import { Container } from 'shared';

export const BooksPage = (): ReactElement => (
  <Container>
    <h1>Books Page</h1>
    <Books />
  </Container>
);
