import React, { ReactElement, FunctionComponent, useContext } from 'react';

import { ThemeContext } from '../../contexts/theme';

export const Books: FunctionComponent = (): ReactElement => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul>
      <li>Book {theme.one}</li>
      <li>Book {theme.two}</li>
    </ul>
  );
};
