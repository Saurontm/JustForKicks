import "./App.css";
import HomePage from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles";

const theme = {
  mainColor: "black",
  backgroundColor: "white",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
