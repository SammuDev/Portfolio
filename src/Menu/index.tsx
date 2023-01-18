import { useState } from 'react';

import { Link } from 'react-router-dom';

import logo from './img/logo-react-icon.png';

// Abaixo: Styled-Components
import Nav from "./styles/Nav";
import NavBar from './styles/NavBar';
import ContactMe from './styles/ContactMe';
import Logo from './styles/Logo';
import ButtonHamburg from './styles/ButtonHamburg';
import Hr from './styles/Hr';
import SpanBox from './styles/SpanBox';
import MenuMobile from './styles/MenuMobile';

const Menu: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <header>
      <Nav>
        <Logo>
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
        </Logo>

        {/* BOTÃO DE MENU MOBILE */}
        <ButtonHamburg onClick={() => setIsOn(!isOn)}>
          {!isOn ? (
          <span>
            <div></div>
            <div></div>
            <div></div>
          </span>
          ) : (
          <SpanBox>
            <div></div>
            <div></div>
            <div></div>
          </SpanBox>
          )}
        </ButtonHamburg>

        <NavBar>
          <Link to={'/'}>Home</Link>
          {/* <Link to={'/'}>Services</Link>
          <Link to={'/'}>Projects</Link> */}
        </NavBar>

        <ContactMe>
          <Link to={'/'}>Contact Me</Link>
        </ContactMe>
      </Nav>

      <MenuMobile on={isOn}>
        <Link to={'/'}>Home</Link>
        {/* <Link to={'/'}>Services</Link>
        <Link to={'/'}>Projects</Link> */}
      </MenuMobile>
      <Hr/>
    </header>
  );
};

export default Menu;
