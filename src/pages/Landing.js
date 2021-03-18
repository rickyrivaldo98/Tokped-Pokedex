import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonList from "./container/PokemonList";
import Top from "./layout/Top";
import MyPokemonCard from "./components/MyPokemon_Card";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});
const Landing = () => {
  return (
    <>
      <Top />
      <MyPokemonCard />
      <ApolloProvider client={client}>
        <PokemonList />
      </ApolloProvider>
    </>
  );
};

export default Landing;
