import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const TabDetail = (props) => {
  const [show1, setShow1] = useState(false);
  const showTab1 = () => {
    setShow1(true);
    setShow2(false);
    setShow3(false);
  };
  const [show2, setShow2] = useState(false);
  const showTab2 = () => {
    setShow1(false);
    setShow2(true);
    setShow3(false);
  };
  const [show3, setShow3] = useState(false);
  const showTab3 = () => {
    setShow1(false);
    setShow2(false);
    setShow3(true);
  };
  const TabParent = styled.div`
    display: flex;
    justify-content: center;
  `;
  const ButtonTab = styled.div`
    text-align: center;
    width: 90px;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;
    background-color: ${(props) =>
      props.actived === "yes" ? "#2cdab1" : "grey"};
    color: white;
    z-index: 2;
    cursor: pointer;
  `;

  const H1Move = styled.h1`
    margin: 20px;
    text-align: center;
  `;

  const ULMove = styled.ul`
    margin-left: 20px;
  `;

  const ParentAbi = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Abilities = styled.div`
    text-align: center;
    width: 120px;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;
    background-color: #2cdab1;
    color: white;
  `;

  return (
    <>
      <TabParent>
        <ButtonTab onClick={showTab1} actived={show1 ? "yes" : "no"}>
          Move
        </ButtonTab>
        <ButtonTab onClick={showTab2} actived={show2 ? "yes" : "no"}>
          Base Stat
        </ButtonTab>
        <ButtonTab onClick={showTab3} actived={show3 ? "yes" : "no"}>
          Abilities
        </ButtonTab>
      </TabParent>

      <div>
        {show1 ? (
          <>
            <H1Move>Move</H1Move>
            <ULMove>
              {props.pokemon.moves.map((x) => (
                <li>{x.move.name}</li>
              ))}
            </ULMove>
            <br />
            <br />
          </>
        ) : null}
        {show2 ? (
          <>
            <H1Move>Base Stat</H1Move>
            <ULMove>
              {props.pokemon.stats.map((x) => (
                <>
                  <h4>{x.stat.name}</h4>
                  <li>{x.base_stat}</li>
                </>
              ))}
            </ULMove>
            <br />
            <br />
          </>
        ) : null}
        {show3 ? (
          <>
            <H1Move>Abilities</H1Move>
            <ParentAbi>
              {props.pokemon.abilities.map((x) => (
                <Abilities>{x.ability.name}</Abilities>
              ))}
            </ParentAbi>

            <br />
            <br />
          </>
        ) : null}
      </div>
    </>
  );
};

export default TabDetail;
