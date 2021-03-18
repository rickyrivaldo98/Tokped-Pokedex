import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { GET_POKEMON } from "../graphql/get_Pokemon";
import PokemonCard from "../components/Pokemon_card";
import styled from "@emotion/styled";
import PreloaderPokemon from "../components/PreloaderPokemon";
const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pagination = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const Arrow = styled.div`
  padding: 0 10px;
`;
const PokemonList = () => {
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const { data, loading } = useQuery(GET_POKEMON, {
    variables: { limit: limit, offset: offset },
  });
  const { pokemons: pokemon } = data || {};
  const { previous: prev } = pokemon || {};
  const { next } = pokemon || {};

  let NextListPokemon = (e) => {
    e.preventDefault();
    setOffset((old) => old + 20);
    setPage((old) => old + 1);
  };
  let PreviousListPokemon = (e) => {
    e.preventDefault();
    setOffset((old) => old - 20);
    setPage((old) => old - 1);
  };
  return (
    <>
      {loading === true && <PreloaderPokemon />}
      {loading === false && (
        <GridContainer>
          {pokemon.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </GridContainer>
      )}
      <Pagination>
        <Arrow>
          {prev === null ? null : (
            <i
              onClick={PreviousListPokemon}
              disabled={prev == null}
              className="fas fa-arrow-left"
            ></i>
          )}
        </Arrow>
        <Arrow>
          <h3>{page}</h3>
        </Arrow>
        <Arrow>
          {next === null ? null : (
            <i
              onClick={NextListPokemon}
              disabled={next == null}
              className="fas fa-arrow-right"
            ></i>
          )}
        </Arrow>
      </Pagination>
    </>
  );
};

export default PokemonList;
