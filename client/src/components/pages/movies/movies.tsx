import React, { FunctionComponent, ReactElement } from 'react';

import { Movies } from '../../sections';
import { Container } from 'shared';

export const MoviesPage: FunctionComponent = (): ReactElement => (
  <Container>
    <h1>Movies Page</h1>
    <Movies />
  </Container>
);
