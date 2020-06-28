import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer/PokemonsContainer.jsx";
import "./App.scss";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
  });

  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <main>
          <h1 className="text-center">Pokemons</h1>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default App;
