import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { getClient } from "./apollo/client";
import { Home } from "./components/Home";

import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => (
  <div className="container-fluid">
    <div className="jumbotron">
      <h1 className="display-4">Country list</h1>
    </div>
    <ApolloProvider client={getClient()}>
      <Home />
    </ApolloProvider>
  </div>
);

export default App;
