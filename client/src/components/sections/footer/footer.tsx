import React, { ReactElement } from 'react';

import { Container } from '../../shared';

import './footer.scss';

export const Footer = (): ReactElement => (
  <footer className="c-footer">
    <Container>
      <small>&copy; 2020 - React Apollo</small>
    </Container>
  </footer>
);
