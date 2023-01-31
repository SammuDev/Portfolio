import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import mySelf from './img/eu-edit-preto.png';
import Hr from './styles/Hr';

import Me from "./styles/Me";
import MySelf from './styles/MySelf';
import TitleMe from "./styles/TitleMe";

const Home: React.FC = () => {
  return (
    <>
      <Me>
        <TitleMe>
          <h1>
            Desenvolvedor<br />
            Full-Stack
          </h1>

          <br />
          <p>Meu nome é Samuel Santos, tenho 21 anos, sou Desenvolvedor Full-Stack e utilizo como minhas
            principais ferramentas o TypeScript para Front-End e o Node.Js para Back-End.</p>
        </TitleMe>

        <MySelf>
          <img src={mySelf} alt="Imagem Pessoal" />
        </MySelf>
      </Me>

      <Hr/>
      <AboutMe/>

      <Hr/>
      <Services/>

      <Hr/>
      <Projects/>

      <Hr/>
      <Footer/>
    </>
  );
};

export default Home;
