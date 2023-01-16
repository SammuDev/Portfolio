import { Link } from 'react-router-dom';
import logo from './img/logo-react-icon.png';

import Nav from "./styles/Nav";
import NavBar from './styles/NavBar';
import ContactMe from './styles/ContactMe';

const Menu = () => {
  return (
    <header>
      <Nav>
        <Link to={'/'}><img src={logo} alt="Logo" /></Link>

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
    </header>
  );
};

export default Menu;
