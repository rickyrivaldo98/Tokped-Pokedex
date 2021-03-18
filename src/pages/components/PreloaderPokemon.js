import React from "react";
import Pokeball from "../assets/pokeball.svg";

const PreloaderPokemon = () => {
  return (
    <>
      <div className="preload">
        <img className="pokeload" src={Pokeball} alt="" />
      </div>
    </>
  );
};

export default PreloaderPokemon;
