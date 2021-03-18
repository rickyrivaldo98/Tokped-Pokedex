import React from "react";
import { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import axios from "axios";
import Top from "./layout/Top";
import styled from "@emotion/styled";
import Card_My2 from "./assets/card_my2.svg";

import MyPokemonList from "./components/MyPokemonList";
import PreloaderPokemon from "./components/PreloaderPokemon";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
});

const My_Pokemon = () => {
  const [myPokemon, setmyPokemon] = useState([]);
  const [isloading, setLoading] = useState(false);
  let i = 1;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://5fb1fc7c87ed490016ea8412.mockapi.io/api/MyPokemon")
      .then((res) => {
        setmyPokemon(res.data);
        setLoading(false);
      });
  }, []);

  const MyCard = styled.div`
    width: 371px;
    height: 85px;
    background-color: #2cdab1;
    margin-left: auto;
    margin-right: auto;
    border-radius: 19px;
    margin-bottom: 20px;
    position: relative;
  `;

  const JudulMy = styled.h1`
    padding-top: 20px;
    text-align: center;
    color: white;
  `;
  const CardMyBG = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
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
    margin-bottom: 20px;
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
      <ButtonBack onClick={goBack}>Back</ButtonBack>
      <MyCard>
        <CardMyBG src={Card_My2} />
        <JudulMy>Ini Pokemon kita</JudulMy>
      </MyCard>

      <ApolloProvider client={client}>
        {isloading && <PreloaderPokemon />}
        {!isloading && (
          <>
            <GridContainer>
              {myPokemon.map((pokemon) => (
                <MyPokemonList
                  myPokemon={pokemon.Pokemon}
                  Nick={pokemon.NickName}
                  Id={pokemon.id}
                  key={i++}
                />
              ))}
            </GridContainer>
          </>
        )}
      </ApolloProvider>
    </>
  );
};

export default My_Pokemon;
