import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    info: String!
    catalog: Catalog!
  }

  type Catalog {
    recipes: [Recipe!]!
    count: Int!
  }

  type Mutation {
    recipe(description: String!): Recipe!
    signup(
      email: String!
      password: String!
    ): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    email: String!
    recipes: [Recipe!]!
  }

  type Recipe {
    id: ID!
    title: String!
    postedBy: User
    createdAt: DateTime!
  }

  scalar DateTime
`;


export default typeDefs;
