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
            Full-Stack
          </h1>

          <br />
          {/* <p>Meu nome é Samuel Santos, tenho 21 anos, sou Desenvolvedor Full-Stack e utilizo como minhas
            principais ferramentas o TypeScript para Front-End e o Node.Js para Back-End.</p> */}

          <p>Olá, meu nome é Samuel, tenho 21 anos e sou desenvolvedor Full Stack. Possuo habilidades em
            diversas tecnologias como Git, GitHub, React, TypeScript, Next.js, Styled-Components, Node, Express,
            MySQL e MongoDB e me considero Proficiente nessas tecnologias.</p>

          <p>Como desenvolvedor Full Stack, sou capaz de trabalhar em projetos desde o desenvolvimento do Front ao Back gerenciando,
            controlando, construindo interfaces interativas e responsivas, evitando erros de tempo de execução em aplicações web de alta
            performance em aplicações web escaláveis, seguras com armazenamento e gerenciamento de dados.</p>
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
