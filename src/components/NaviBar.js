import { Navbar, Nav } from "react-bootstrap";
import { ThemeButton, NavProduct, Logo } from "../styles";
import { BiMoon, BiSun } from "react-icons/bi";
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";

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
          <NavProduct to="/products" className="nav-item">
            Sneakers
          </NavProduct>
        </Nav>
      </Navbar.Collapse>
      <ThemeButton onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? <BiMoon /> : <BiSun />}
      </ThemeButton>
    </Navbar>
  );
};

export default NaviBar;
