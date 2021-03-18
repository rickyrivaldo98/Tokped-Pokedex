import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import CardMy from "../assets/card_my.svg";

const MyPokemon_card = () => {
  const [loading, setLoading] = useState(false);
  const [myPokemon, setmyPokemon] = useState([]);

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
    display: flex;
  `;

  const ButtonMy = styled.div`
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
  `;

  const JudulMy = styled.div`
    padding-top: 10px;
    padding-bottom: 15px;
    margin-left: 20px;
    color: white;
    font-size: 18px;
    font-weight: 1000;
  `;

  const TotalMy = styled(JudulMy)`
    font-size: 14px;
    padding-top: 12px;
    padding-left: 35px;
    padding-bottom: 0px;
  `;
  const TotalNum = styled(JudulMy)`
    font-size: 14px;
    padding-top: 0px;
    font-size: 35px;
    padding-left: 65px;
  `;
  const TotalLoad = styled(TotalNum)`
    font-size: 12px;
    padding-top: 15px;
    padding-left: 70px;
  `;

  const CardMyBG = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
  `;

  return (
    <>
      <MyCard>
        <div>
          <JudulMy>Lihat Pokemon Kamu</JudulMy>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/mypokemon"
          >
            <ButtonMy>Lihat</ButtonMy>
          </Link>
        </div>
        <div>
          <TotalMy>Total Pokemon</TotalMy>
          {loading === true ? (
            <TotalLoad>load...</TotalLoad>
          ) : (
            <TotalNum>{myPokemon.length}</TotalNum>
          )}
        </div>
        <CardMyBG src={CardMy} />
      </MyCard>
    </>
  );
};

export default MyPokemon_card;
