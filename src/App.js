import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";
import { useState } from "react";
import Navibar from "./components/NaviBar";
import React from "react";
import Routes from "./components/Routes";
import productStore from "./stores/productStore";
import brandStore from "./stores/brandStore";
import { observer } from "mobx-react";

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
        {productStore.loading || brandStore.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </div>
  );
}

export default observer(App);
