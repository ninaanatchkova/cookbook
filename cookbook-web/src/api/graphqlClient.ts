import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    credentials: "include",
    uri: "http://localhost:7000/graphql",
  })
});

export default client;
