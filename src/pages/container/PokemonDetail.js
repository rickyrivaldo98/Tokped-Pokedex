import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../graphql/get_Detail_Pokemon";
import Card_Detail from "../assets/card_detail.svg";
import Pokeball from "../assets/pokeball.svg";
import axios from "axios";
import styled from "@emotion/styled";
import TabDetail from "../components/TabDetail";
import PreloaderPokemon from "../components/PreloaderPokemon";
import { useAlert } from "react-alert";

const Card = styled.div`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 371px;
  border: 1px solid #ccc;
  position: relative;
  max-width: 371px;
  background-color: #2cdab1;
  border-radius: 20px;
`;

const IMGPoke = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const IMGbg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const IMGBall = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  cursor: pointer;
`;
const H6Catch = styled.h6`
  position: absolute;
  top: 70px;
  right: 22px;
  color: white;
`;

const H1pokename = styled.h1`
  color: white;
  text-align: center;
  margin-top: 5px;
  z-index: 2;
`;
const H1pokeid = styled(H1pokename)`
  margin-top: 20px;
  font-size: 20px;
  z-index: 2;
`;
const Typeparent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
const Typebutton = styled.div`
  text-align: center;
  width: 90px;
  padding: 5px;
  margin: 5px;
  border-radius: 20px;
  background-color: ${({ color }) => handleColorType(color)};
  color: white;
  z-index: 2;
`;

const PokemonDetail = ({ param }) => {
  const { data, loading } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name: param },
  });

  const { pokemon } = data || {};

  const [ourChance, setourChance] = useState(Math.random() < 0.5);
  const catchpokemon = (e) => {
    e.preventDefault();

    setourChance(Math.random() < 0.5);
    if (ourChance === true) {
      let nick = prompt("Pokemon Berhasil ditambahkan, berikan nama panggilan");
      let nickname = "";
      if (nick === null || nick === "") {
        nickname = pokemon.name;
      } else {
        nickname = nick;
      }
      const poke = {
        Pokemon: pokemon.name,
        NickName: nickname,
      };
      axios
        .post("https://5fb1fc7c87ed490016ea8412.mockapi.io/api/MyPokemon", poke)
        .then((res) => {
          alert.show(`Yey ${nickname} berhasil ditangkap`, {
            title: "Sukses!",
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          alert.show("Ada Error Ketika Menambahkan Pokemon");
        });
    } else {
      alert.show("Yah Pokemonnya Kabur, Coba Lagi", {
        title: "Gagal:(",
      });
    }
  };

  const alert = useAlert();
  return (
    <>
      {loading === true && <PreloaderPokemon />}
      {loading === false && (
        <>
          <Card>
            <H1pokeid>No Pokemon: {pokemon.id}</H1pokeid>
            <H1pokename>{pokemon.name}</H1pokename>
            <IMGPoke src={pokemon.sprites.front_default} alt="" />
            <Typeparent>
              {pokemon.types.map((x) => (
                <Typebutton color={x.type.name}>{x.type.name}</Typebutton>
              ))}
            </Typeparent>
            <IMGbg src={Card_Detail} />
            <IMGBall src={Pokeball} onClick={catchpokemon} />
            <H6Catch>Catch!</H6Catch>
          </Card>
          <br />
          <TabDetail pokemon={pokemon} />
        </>
      )}
    </>
  );
};

export default PokemonDetail;
