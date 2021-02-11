import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    credentials: "include",
    uri: process.env.REACT_APP_SERVICES_URI + "/graphql"
  })
});

export default client;
