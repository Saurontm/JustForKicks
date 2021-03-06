import { NavLink, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};

  &.active {
    color: ${(props) => props.theme.lightColor};
  }
`;

export const Logo = styled(Link)`
  img {
    width: 8rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 400%;
  margin-top: 30px;
`;

export const SignupTitle = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-family: "Open Sans", sans-serif;
  ${"" /* font-weight: 600; */}
  ont-size: 180%;
  ${"" /* margin-top: 20px; */}

  &.small {
    font-size: 130%;
    margin: 0;
    margin-bottom: 10;
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-family: "Bodoni Moda", serif;
  font-style: italic;
  font-weight: 100;
  font-size: 200%;
  margin-top: 0px;
  margin-bottom: -20px;
`;

export const HelloMessage = styled.p`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-family: "Bodoni Moda", serif;
  font-style: italic;
  font-weight: 100;
  font-size: 150%;
  margin-top: 15px;
  margin-right: 15px;
`;

export const ShopImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ListWrapper = styled.div`
  display: flex; /* allows us to use Flexbox */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`;

export const ProductWrapper = styled.div`
  margin: 50px;
  text-align: center;
  img {
    width: auto;
    height: 180px;
    display: block;
    margin: 0 auto;
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.secondaryColor};
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    margin: 30px;

    &.product-price {
      color: ${(props) => props.theme.secondaryColor};
    }

    button {
      allign: center;
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  border: 2px solid;
  padding: 0.1em 0.4em 0.2em 0.4em;
  border-radius: 30px;
  float: right;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.secondaryColor};

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const UserButtonStyled = styled.button`
  font-size: 1em;
  ${"" /* margin: 1em; */}
  border: 2px solid;
  padding: 0.1em 0.4em 0.2em 0.4em;
  border-radius: 30px;
  float: right;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.secondaryColor};

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const StyledInputDiv = styled.div`
  display: "flex";
  flex-direction: "row";
  border: 1px solid grey;

  &.focus {
    /* removing the input focus blue box. Put this on the form if you like. */
    outline: none;
  }
`;

export const StyledInput = styled.input`
  border: 0;
  outline: 0;
  outline-width: 0;
  box-shadow: 0;

  *:focus {
    outline: 0;
    border: 0;
    outline-width: 0;
  }
`;

export const HideButtonStyled = styled.button`
  font-size: 1em;
  ${"" /* position: absolute; */}
  float: right;
  ${"" /* margin: 0.6em; */}
  border: none;
  ${"" /* padding: 0.1em 0.4em 0.2em 0.4em; */}
  border-radius: 30px;
  ${"" /* float: right; */}
  background-color: rgba(0,0,0,0.0);
  color: ${(props) => props.theme.secondaryColor};
`;

export const DeleteButtonStyled = styled.button`
  font-size: 1em;
  float: right;
  ${"" /* margin-right: 5px; */}
  display: inline-block;
  margin: 1.25em;
  border: 1px solid;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  border-radius: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: #cf5959;

  &:hover {
    background-color: #cf5959;
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const BackButton = styled.button`
  float: right;
  font-size: 1em;
  ${"" /* margin: 1.25em; */}
  padding: 0.2em 0.5em;
  border: 2px solid;
  border-radius: 40px;
  border-color: ${(props) => props.theme.lightColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.lightColor};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.lightColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;
export const SignButton = styled.button`
  float: center;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: underline;
  color: ${(props) => props.theme.secondaryColor};
`;

export const AddButton = styled.button`
  float: left;
  font-size: 1em;
  margin-top: 1.25em;
  padding: 0.2em 0.5em;
  border: 2px solid;
  border-radius: 40px;
  border-color: ${(props) => props.theme.lightColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.lightColor};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.lightColor};
    color: ${(props) => props.theme.backgroundColor};
  }
  &.signup {
    float: center;
    margin-left: auto;
    margin-top: -300;
    margin-bottom: 300;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  margin-bottom: -30px;
  display: block;
  width: 40%;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
`;

export const DetailWrapper = styled.div`
  display: "flex"
  align-content: center;
  ${"" /* display: block; */}
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 80%;

  img {
    width: 50%;
    float: left;
    margin-right: 20px;
  }
  h4 {
    font-size: 30px;
    ${"" /* vertical-align: middle; */}
    color: ${(props) => props.theme.mainColor};
  }
  p {
    padding-right: 20px;
    ${"" /* vertical-align: middle; */}
    color: ${(props) => props.theme.secondaryColor};
  }

  &.brand{
    ${"" /* display: block; */}
    img {
    width: 20%;
    height: auto;
    float: center;
    margin: auto;
  }

  }
`;

export const BsPlusCircleStyled = styled(BsPlusCircle)`
  size: 1.7em;
  float: right;
  margin-right: 2.3em;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.lightColor};

  &:hover {
    ${"" /* background-color: ${(props) => props.theme.secondaryColor}; */}
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const IoMdCloseStyled = styled(IoMdClose)`
  size: 1.7em;
  float: right;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.lightColor};

  &:hover {
    ${"" /* background-color: ${(props) => props.theme.secondaryColor}; */}
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const UpdateButtonStyled = styled.button`
  font-size: 1em;
  display: inline-block;
  float: left;
  margin-right: 5px;
  margin: 1.25em;
  border: 1px solid;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  border-radius: 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.secondaryColor};

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;
