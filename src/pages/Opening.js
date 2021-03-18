import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.svg";
import BgPokeball from "./assets/bg-pokeball-top.svg";
import Pokeball from "./assets/pokeball.svg";
import styled from "@emotion/styled";

const IMG = styled.img`
  width: 100%;
`;

const Press = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const IMGPokeball = styled(IMG)`
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Linkop = styled.h4`
  text-align: center;
  font-weight: 900;
  margin: 0;
`;

const Topcard = styled.div`
  width: 414px;
  height: 301px;
  background: rgb(133, 250, 231);
  background: linear-gradient(
    90deg,
    rgba(133, 250, 231, 1) 0%,
    rgba(14, 196, 199, 1) 100%
  );
  border-radius: 0 0 20px 20px;
  margin-bottom: 20px;
  position: relative;
  text-align: center;
`;

const BgPokeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
const JudulOpen = styled.h1`
  text-align: center;
  padding-top: 20px;
  color: white;
  letter-spacing: 0.9em;
  text-align: center;
  text-indent: 0.9em;
  text-shadow: rgb(255, 203, 5) 3px 0px 0px,
    rgb(255, 203, 5) 2.83487px 0.981584px 0px,
    rgb(255, 203, 5) 2.35766px 1.85511px 0px,
    rgb(255, 203, 5) 1.62091px 2.52441px 0px,
    rgb(255, 203, 5) 0.705713px 2.91581px 0px,
    rgb(255, 203, 5) -0.287171px 2.98622px 0px,
    rgb(255, 203, 5) -1.24844px 2.72789px 0px,
    rgb(255, 203, 5) -2.07227px 2.16926px 0px,
    rgb(255, 203, 5) -2.66798px 1.37182px 0px,
    rgb(255, 203, 5) -2.96998px 0.42336px 0px,
    rgb(255, 203, 5) -2.94502px -0.571704px 0px,
    rgb(255, 203, 5) -2.59586px -1.50383px 0px,
    rgb(255, 203, 5) -1.96093px -2.27041px 0px,
    rgb(255, 203, 5) -1.11013px -2.78704px 0px,
    rgb(255, 203, 5) -0.137119px -2.99686px 0px,
    rgb(255, 203, 5) 0.850987px -2.87677px 0px,
    rgb(255, 203, 5) 1.74541px -2.43999px 0px,
    rgb(255, 203, 5) 2.44769px -1.73459px 0px,
    rgb(255, 203, 5) 2.88051px -0.838247px 0px;
  font-weight: 900;
  font-size: 33px;
`;

const LogoIMG = styled.img`
  padding-top: 140px;
  padding-right: auto;
  padding-left: auto;
  width: 60%;
`;
const Botcard = styled.div`
  width: 414px;
  height: 1299px;
  background: rgb(133, 250, 231);
  background: linear-gradient(
    90deg,
    rgba(133, 250, 231, 1) 0%,
    rgba(14, 196, 199, 1) 100%
  );
  border-radius: 20px 20px 0 0;
  margin-bottom: 20px;
  position: relative;
`;

const Sign = styled.h6`
  color: white;
  text-align: center;
  padding-top: 40px;
`;

const Opening = () => {
  return (
    <>
      <Topcard>
        <BgPokeImage src={BgPokeball} />
        <LogoIMG src={Logo} />

        <JudulOpen>POXEDEX</JudulOpen>
      </Topcard>
      <Press>
        <Link to="/landing">
          <IMGPokeball src={Pokeball} />
        </Link>
        <Linkop>Press The Pokeball</Linkop>
      </Press>
      <Botcard>
        <Sign>Made with love from ricky</Sign>
      </Botcard>
    </>
  );
};

export default Opening;
