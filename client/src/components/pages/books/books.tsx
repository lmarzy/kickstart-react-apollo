import React, { ReactElement } from 'react';

import { Books, PageTitle } from '../../sections';
import { Container } from '../../shared';

export const BooksPage = (): ReactElement => (
  <Container>
    <PageTitle title="Books" />
    <Books />
  </Container>
);
