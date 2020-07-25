import React, { ReactElement, FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './apollo-client';

import { HomePage, AboutPage, ContextPage } from 'pages';
import { Header, Nav } from 'sections';

import 'styles/app.scss';

export const App: FunctionComponent = (): ReactElement => (
  <ApolloProvider client={apolloClient}>
    <Header />
    <Nav />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/context" component={ContextPage} />
    </Switch>
  </ApolloProvider>
);
