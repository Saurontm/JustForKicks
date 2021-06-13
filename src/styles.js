import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 400%;
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-family: "Bodoni Moda", serif;
  font-style: italic;
  font-weight: 100;
  font-size: 200%;
  margin-top: -50px;
  margin-bottom: -20px;
`;

export const ShopImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ListWrapper = styled.div`
  display: flex; /* allows us to use Flexbox */
  align-items: center;
  justify-content: center;
`;

export const ProductWrapper = styled.div`
  img {
    width: auto;
    height: 150px;
    display: block;
    margin: 0 auto;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.mainColor};
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    margin: 20px;

    &.product-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 0.5em;
  border-radius: 30px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
