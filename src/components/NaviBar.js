import { Navbar, Nav } from "react-bootstrap";
import SigninButton from "./SigninButton";
import { ThemeButton, Logo, HelloMessage } from "../styles";
import { BiMoon, BiSun } from "react-icons/bi";
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const NaviBar = (props) => {
  return (
    <Navbar bg={props.currentTheme} expand="lg" variant={props.currentTheme}>
      <Logo to="/" className="navbar-brand">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
        ></img>
      </Logo>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/products">Sneakers</Nav.Link>
          <Nav.Link href="/brands">Brands</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {authStore.user ? (
        <HelloMessage> welcome, {authStore.user.username}</HelloMessage>
      ) : (
        <SigninButton></SigninButton>
      )}

      <ThemeButton onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? <BiMoon /> : <BiSun />}
      </ThemeButton>
    </Navbar>
  );
};

export default observer(NaviBar);
