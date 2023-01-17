import mySelf from './img/eu-edit-preto.png';

import Me from "./styles/Me";
import MySelf from './styles/MySelf';
import TitleMe from "./styles/TitleMe";

const Home: React.FC = () => {
  return (
    <Me>
      <TitleMe>
        <h1>
          Desenvolvedor Front-End <br /> React - TypeScript
        </h1>

        <br />
        <p>Meu nome é Samuel Santos, tenho 21 anos e Sou Desenvolvedor</p>
        <p>de Software Front-End, e nessa página você conhecerá um pouco</p>
        <p>mais sobre mim, meus projetos e os objetivos que almejo.</p>
      </TitleMe>

      <MySelf>
        <img src={mySelf} alt="Imagem Pessoal" />
      </MySelf>
    </Me>
  );
};

export default Home;
