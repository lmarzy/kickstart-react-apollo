import React, { FunctionComponent, ReactElement } from 'react';

import { Movies, PageTitle } from '../../sections';
import { Container } from '../../shared';

export const MoviesPage: FunctionComponent = (): ReactElement => (
  <Container>
    <PageTitle title="Movies" />
    <Movies />
  </Container>
);
