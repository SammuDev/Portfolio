import { useState } from 'react';

// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import logo from './img/logo-react-icon.png';

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Abaixo: Styled-Components
import Nav from "./styles/Nav";
import NavBar from './styles/NavBar';
import ContactMe from './styles/ContactMe';
import Logo from './styles/Logo';
import ButtonHamburg from './styles/ButtonHamburg';
import Hr from './styles/Hr';
import SpanBox from './styles/SpanBox';
import MenuMobile from './styles/MenuMobile';
import SocialMenu from './styles/SocialMenu';
import RoutesMobile from './styles/RoutesMobile';
import SocialLinks from './styles/SocialLinks';

const Menu: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const In = 'https://www.linkedin.com/in/samuel-santos-5b1626216/';
  const GitGub = 'https://github.com/SammuDev';
  const Insta = 'https://www.instagram.com/samuca_dev/';

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
          {/* <Link to={'/'}>Home</Link> */}
          <Link to={'footer'} smooth={true} offset={-200} duration={-500}>Home</Link>
          {/* <Link to={'/'}>Services</Link> */}
          <Link to={'footer'} smooth={true} offset={200} duration={500}>Projects</Link>
          <Link to={'/'}>Projects</Link>
        </NavBar>

        <ContactMe>
          {/* <Link to={'/'}>Contact Me</Link> */}
          <SocialMenu href={In} target={'_blank'}><FaLinkedinIn/></SocialMenu>
          <SocialMenu href={GitGub} target={'_blank'}><FaGithub/></SocialMenu>
          <SocialMenu href={Insta} target={'_blank'}><FaInstagram/></SocialMenu>
        </ContactMe>
      </Nav>

      <MenuMobile on={isOn}>
        <RoutesMobile>
          <Link to={'/'}>
            Home<br />
            <hr />
          </Link>

          {/* <Link to={'/'}>
            Services<br />
            <hr />
          </Link> */}

          {/* <Link to={'/'}>
            Projects<br />
            <hr />
          </Link> */}
        </RoutesMobile>

        <SocialLinks>
          {/* <SocialMenu href={In} target={'_blank'}><FaLinkedinIn/></SocialMenu>
          <SocialMenu href={GitGub} target={'_blank'}><FaGithub/></SocialMenu>
          <SocialMenu href={Insta} target={'_blank'}><FaInstagram/></SocialMenu> */}
        </SocialLinks>
      </MenuMobile>
      <Hr/>
    </header>
  );
};

export default Menu;
