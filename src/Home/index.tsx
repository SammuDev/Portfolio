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

          <p>Olá, meu nome é Samuel, tenho 21 anos e sou desenvolvedor Full-Stack. Possuo habilidades em diversas tecnologias, incluindo
            <BackColorALL>Git, GitHub, React, TypeScript, Next.js, Styled-Components, Node, Express, MongoDB e MySQL</BackColorALL>.</p>

          <p>Como desenvolvedor Full-Stack, sou capaz de trabalhar em projetos desde o desenvolvimento do Back-End até o Front-End. Utilizo
            <BackColorALL>Git</BackColorALL> e <BackColorALL>GitHub</BackColorALL> para gerenciar e controlar as versões do meu código.</p>

          <p>Trabalho com React para construir interfaces interativas e responsivas, utilizando <BackColorALL>TypeScript</BackColorALL> para
            fornecer tipagem segura e ajudar a evitar erros de tempo de execução. Utilizo <BackColorALL>Next.js</BackColorALL> para construir
            aplicações web de alta performance e <BackColorALL>Styled-Components</BackColorALL> para estilizar minhas aplicações de forma
            eficiente.</p>

          <p>Para o Back-End, utilizo <BackColorALL>Node</BackColorALL> e <BackColorALL>Express</BackColorALL> para construir aplicações web
            escaláveis e seguras. Utilizo <BackColorALL>MongoDB</BackColorALL> e <BackColorALL>MySQL</BackColorALL> para armazenar e
            gerenciar dados de forma eficiente.</p>

          <p>Em resumo, sou capaz de trabalhar em projetos completos, desde o desenvolvimento do Back-End até o Front-End, utilizando as
            tecnologias mencionadas para construir soluções robustas e escaláveis.</p>
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
