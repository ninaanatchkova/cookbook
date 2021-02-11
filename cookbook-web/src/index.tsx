import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import './index.scss';
import App from './App';
import graphqlClient from "./api/graphqlClient";

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
