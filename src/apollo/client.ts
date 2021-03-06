import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split, Operation } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URL || "wss://localhost:4000",
  options: {
    reconnect: true,
  },
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || "https://localhost:4000",
});

const link = split(
  ({ query }: Operation) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
