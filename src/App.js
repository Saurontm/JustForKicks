import "./App.css";
import HomePage from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";
import { useState } from "react";
import { ThemeButton } from "./styles";
import { BiMoon, BiSun } from "react-icons/bi";

const theme = {
  light: { mainColor: "#222222", backgroundColor: "white" },
  dark: { mainColor: "white", backgroundColor: "#222222" },
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
        <ThemeButton onClick={toggleTheme}>
          {currentTheme === "light" ? <BiMoon /> : <BiSun />}
        </ThemeButton>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
