import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { getClient } from "./apollo/client";
import { Home } from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <ApolloProvider client={getClient()}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
