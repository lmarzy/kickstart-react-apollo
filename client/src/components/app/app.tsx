import React, { ReactElement, FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './apollo-client';

import { HomePage, MoviesPage, BooksPage } from 'pages';
import { Header, Footer } from 'sections';

import 'styles/app.scss';

export const App: FunctionComponent = (): ReactElement => (
  <ApolloProvider client={apolloClient}>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/Books" component={BooksPage} />
      </Switch>
    </main>
    <Footer />
  </ApolloProvider>
);
