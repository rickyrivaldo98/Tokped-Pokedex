import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonDetail from "./container/PokemonDetail";
import { useParams } from "react-router-dom";
import MyPokemonCard from "./components/MyPokemon_Card";
import styled from "@emotion/styled";
import Top from "./layout/Top";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});

const Detail_Pokemon = () => {
  let { name } = useParams();
  const ButtonBack = styled.div`
    background: rgb(133, 250, 231);
    background: linear-gradient(
      90deg,
      rgba(133, 250, 231, 1) 0%,
      rgba(14, 196, 199, 1) 100%
    );
    text-align: center;
    width: 120px;
    padding: 2px;
    margin-left: 20px;
    border-radius: 20px;
    cursor: pointer;
    color: white;
  `;
  function goBack() {
    window.history.back();
  }

  return (
    <>
      <Top />
      <MyPokemonCard />
      <ButtonBack onClick={goBack}>Back</ButtonBack>
      <ApolloProvider client={client}>
        <PokemonDetail param={name} />
      </ApolloProvider>
    </>
  );
};

export default Detail_Pokemon;
