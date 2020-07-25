import React, { ReactElement, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Nav: FunctionComponent = (): ReactElement => (
  <ul>
    <li>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/context">Context</Link>
    </li>
  </ul>
);
