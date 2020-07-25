import React, {
  FunctionComponent,
  ReactElement,
  createContext,
  useState,
} from 'react';

export const ThemeContext = createContext(null);

export const ThemeContextProvider: FunctionComponent = ({
  children,
}): ReactElement => {
  const data = {
    one: 1,
    two: 2,
  };

  const [theme, setTheme] = useState(data);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
