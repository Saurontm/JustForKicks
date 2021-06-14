import "./App.css";
import HomePage from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";
import { useState } from "react";
import { ThemeButton } from "./styles";
import { BiMoon, BiSun } from "react-icons/bi";

const theme = {
  light: {
    mainColor: "#222222",
    backgroundColor: "white",
    secondaryColor: "#4B4B4B",
    lightColor: "#B3B3B3",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#222222",
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
        <HomePage />
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? <BiMoon /> : <BiSun />}
        </ThemeButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
