import "./App.css";
import HomePage from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";
import { useState } from "react";
import { Route } from "react-router";
import { Switch } from "react-router";
import SneakersList from "./components/SneakerList";
import Navibar from "./components/NaviBar";
import SneakerDetail from "./components/SneakerDetails";
import React from "react";

const theme = {
  light: {
    mainColor: "#222222",
    backgroundColor: "white",
    secondaryColor: "#4B4B4B",
    lightColor: "#B3B3B3",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#272C31",
    secondaryColor: "#DEDEDE",
    lightColor: "#5E5E5E",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };
  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <Navibar
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
        ></Navibar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products/:productSlug">
            <SneakerDetail></SneakerDetail>
          </Route>
          <Route path="/products">
            <SneakersList />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
