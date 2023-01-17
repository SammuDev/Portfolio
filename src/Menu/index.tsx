import { Link } from 'react-router-dom';
import logo from './img/logo-react-icon.png';

// Abaixo: Styled-Components
import Nav from "./styles/Nav";
import NavBar from './styles/NavBar';
import ContactMe from './styles/ContactMe';
import Logo from './styles/Logo';
import MenuMobile from './styles/MenuMobile';
import Hr from './styles/Hr';

const Menu = () => {
  return (
    <header>
      <Nav>
        <Logo>
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
        </Logo>

        <MenuMobile>
          <div></div>
          <div></div>
          <div></div>
        </MenuMobile>

        <NavBar>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>Services</Link>
          <Link to={'/'}>About Me</Link>
          <Link to={'/'}>Projects</Link>
        </NavBar>

        <ContactMe>
          <Link to={'/'}>Contact Me</Link>
        </ContactMe>
      </Nav>
      <Hr/>
    </header>
  );
};

export default Menu;
