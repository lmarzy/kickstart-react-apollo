import React, { FunctionComponent, ReactElement, createContext } from 'react';

import { Books, Movies } from '../../sections/index';

import { ThemeContextProvider } from '../../contexts/theme';

export const ContextPage: FunctionComponent = (): ReactElement => (
  <>
    <h1>Context Page</h1>
    <ThemeContextProvider>
      <Books />
      <Movies />
    </ThemeContextProvider>
  </>
);
