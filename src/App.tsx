import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { getClient } from "./apollo/client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={getClient()}>
      <div>Foo</div>
    </ApolloProvider>
  );
};

export default App;
