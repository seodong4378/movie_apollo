import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";
import App from './component/App';
import client from './apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider >
  </React.StrictMode>,
  document.getElementById('root')
);