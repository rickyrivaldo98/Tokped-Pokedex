import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../graphql/get_Detail_Pokemon";
import styled from "@emotion/styled";
import BgPoke from "../assets/bg-pokeball.svg";
import Pokeball from "../assets/pokeball.svg";

const Card = styled.div`
  width: 31%;
  margin-bottom: 3%;
  margin-right: 2%;
  position: relative;
  background-color: #2cdab1;
  border-radius: 19px;
  padding: 10px;
  box-shadow: 0 4px 8px rgb(204 204 204);
`;

const CardImage = styled.div`
  display: flex;
`;

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

const PokeImage = styled.img`
  overflow: hidden;
  z-index: 2;
`;

const BgPokeImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const H3 = styled.h3((props) => ({ color: props.color }));

const ButtonType = styled.div`
  border-radius: 16px;
  background-color: ${({ color }) => handleColorType(color)};
  padding: 5px 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 8px;
  color: white;
`;
const handleColorType = (color) => {
  switch (color) {
    case "bug":
      return "#94BC4A";
    case "dark":
      return "#736C75";
    case "dragon":
      return "#6A7BAF";
    case "electric":
      return "#E5C531";
    case "fairy":
      return "#E397D1";
    case "fighting":
      return "#CB5F48";
    case "fire":
      return "#EA7A3C";
    case "flying":
      return "#7DA6DE";
    case "ghost":
      return "#846AB6";
    case "grass":
      return "#71C558";
    case "ground":
      return "#CC9F4F";
    case "ice":
      return "#70CBD4";
    case "normal":
      return "#AAB09F";
    case "poison":
      return "#B468B7";
    case "psychic":
      return "#E5709B";
    case "rock":
      return "#B2A061";
    case "steel":
      return "#89A1B0";
    case "water":
      return "#539AE2";
    default:
      return "grey";
  }
};
const Pokemon_card = ({ pokemon }) => {
  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: pokemon.name },
  });
  const { pokemon: pokemonDet } = data || {};

  return (
    <>
      {loading && <img className="pokeloaddetail " src={Pokeball} alt="" />}
      {!loading && (
        <>
          <Card>
            <Link
              style={{ textDecoration: "none" }}
              to={`detail/${pokemonDet.name}`}
            >
              <div>
                <H1 color="white">{pokemon.name}</H1>

                <H3 color="#3AA987">
                  {pokemonDet.id === null
                    ? "Api Problem"
                    : `No: ${pokemonDet.id}`}
                </H3>
                <CardImage>
                  <div style={{ marginTop: "20px" }}>
                    {pokemonDet.types === null ? (
                      <div style={{ fontSize: "10px" }}>API Problem</div>
                    ) : (
                      pokemonDet.types.map((x) => (
                        <ButtonType color={x.type.name}>
                          {x.type.name}
                        </ButtonType>
                      ))
                    )}
                  </div>

                  <PokeImage src={pokemon.image} alt="" />
                </CardImage>
                <BgPokeImage src={BgPoke} alt="" />
              </div>
            </Link>
          </Card>
        </>
      )}
    </>
  );
};

export default Pokemon_card;
