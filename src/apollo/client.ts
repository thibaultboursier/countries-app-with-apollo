import ApolloClient from "apollo-boost";

let client: ApolloClient<unknown>;

export const getClient = () =>
  client ||
  new ApolloClient({
    uri: "https://countries.trevorblades.com"
  });
