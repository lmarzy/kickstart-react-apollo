import React, { ReactElement, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

export const Nav: FunctionComponent = (): ReactElement => (
  <nav className="c-nav">
    <ul className="c-nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
    </ul>
  </nav>
);
