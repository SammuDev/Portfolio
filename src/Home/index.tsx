import mySelf from './img/eu.png';

import Me from "./styles/Me";
import MySelf from './styles/MySelf';
import TitleMe from "./styles/TitleMe";

const Home = () => {
  return (
    <Me>
      <TitleMe>
        <h1>Digital designer <br />
        crafting products <br />
        that people love</h1> <br />

        <p>I'm David Louis— a designer who works with startups looking to push creative boundaries and create unique
        user experiences.</p>
      </TitleMe>

      <MySelf>
        <img src={mySelf} alt="Imagem Pessoal" />
      </MySelf>
    </Me>
  );
};

export default Home;
