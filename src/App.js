import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import DetailPokemon from "./pages/Detail_Pokemon";
import Landing from "./pages/Landing";
import MyPokemon from "./pages/MyPokemon";
import Opening from "./pages/Opening";
import styled from "@emotion/styled";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Container = styled.div`
  height: 1700px;
  width: 414px;
  border: 1px solid #ccc;
  position: relative;
`;

const App = () => {
  return (
    <>
      <Container>
        <Switch>
          <Route path="/mypokemon">
            <MyPokemon />
          </Route>
          <Route path="/detail/:name">
            <DetailPokemon />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/">
            <Opening />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
