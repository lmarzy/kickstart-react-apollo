import React, { ReactElement, FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, AboutPage } from '../pages';
import { Nav } from '../sections';

export const App: FunctionComponent = (): ReactElement => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </div>
);
