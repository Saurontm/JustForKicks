import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const Title = styled.h1`
  color: dimgray;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const Description = styled.h4`
  color: dimgray;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
    color: dimgray;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    margin: 20px;

    &.product-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
