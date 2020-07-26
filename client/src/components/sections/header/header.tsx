import React, { ReactElement } from 'react';

import { Nav } from 'sections';
import { Container } from 'shared';

import './header.scss';

export const Header = (): ReactElement => (
  <header className="c-header">
    <Container>
      <h1>React Apollo</h1>
      <Nav />
    </Container>
  </header>
);
