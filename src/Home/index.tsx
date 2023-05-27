import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import mySelf from './img/eu-edit-preto.png';
import BackColorALL from './styles/BackColorALL';
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
            Android
          </h1>

          <br />
          {/* <p>Meu nome é Samuel Santos, tenho 21 anos, sou Desenvolvedor Full-Stack e utilizo como minhas
            principais ferramentas o TypeScript para Front-End e o Node.Js para Back-End.</p> */}

          <p>Sou Desenvolvedor Kotlin Android apaixonado por criar aplicativos incríveis e funcionais. Com um
            ano de experiência nessa área, tenho tido a oportunidade de mergulhar em projetos desafiadores,
            explorando o vasto ecossistema Android e aplicando as melhores práticas de desenvolvimento.</p>

          <p>Estou aberto a novas oportunidades e ansioso para enfrentar novos desafios
            que me permitam expandir meu conhecimento e contribuir para o sucesso de projetos inovadores.</p>
        </TitleMe>

        <MySelf>
          <img src={mySelf} alt="Imagem Pessoal" />
        </MySelf>
      </Me>

      <Hr/>
      <AboutMe/>

      {/* <Hr/>
      <Services/> */}

      <Hr/>
      <Projects/>

      <Hr/>
      <Footer/>
    </>
  );
};

export default Home;
