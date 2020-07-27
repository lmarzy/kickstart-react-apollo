import React, { ReactElement, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

interface NavProps {
  visible: boolean;
  closeNav: (arg0: boolean) => void;
}

export const Nav: FunctionComponent<NavProps> = ({
  visible,
  closeNav,
}): ReactElement => {
  let classes = 'c-nav';

  if (visible) {
    classes += ' isActive';
  }

  return (
    <nav className={classes}>
      <ul className="c-nav__list">
        <li>
          <Link
            to="/"
            className="c-nav__link"
            onClick={() => closeNav(!visible)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/movies"
            className="c-nav__link"
            onClick={() => closeNav(!visible)}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className="c-nav__link"
            onClick={() => closeNav(!visible)}
          >
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};
