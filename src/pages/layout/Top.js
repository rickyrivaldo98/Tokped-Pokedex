import React from "react";
import styled from "@emotion/styled";
import BgPokeball from "../assets/bg-pokeball-top.svg";
import Logo from "../assets/logo.svg";

const Top = () => {
  const Judullist = styled.h1`
    text-align: right;
    padding-top: 160px;
    padding-right: 34px;
    color: white;
  `;

  const BgPokeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
  `;

  const LogoIMG = styled.img`
    float: right;
    padding-top: 100px;
    padding-right: 34px;
    width: 60%;
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
  `;
  return (
    <>
      <Topcard>
        <BgPokeImage src={BgPokeball} />
        <LogoIMG src={Logo} />
        <Judullist>
          Yuk, Cari Pokemon <br /> Yang Kamu Suka
        </Judullist>
      </Topcard>
    </>
  );
};

export default Top;
