import Git from './img/git.jpg';
import GitHub from './img/github.jpg';
import Express from './img/express.jpg';
import React from './img/react.jpg';
import Styled from './img/styled.jpg';
// import Redux from './img/redux.jpg';
import Type from './img/typescript.jpg';
import Next from './img/next.jpg';
import Node from './img/node.jpg';

import CardStack from './styles/CardStack';
import ImgCard from './styles/ImgCard';

import SectionAbout from "./styles/SectionAbout";
import TitleAbout from "./styles/TitleAbout";
import Stacks from './styles/Stacks';

const AboutMe: React.FC = () => {
  return (
    <SectionAbout>
      <TitleAbout>
        Habilidades e Competências
        <p>Essas são as stacks que utilizo diariamente</p>
      </TitleAbout>

      <Stacks>
        <CardStack>
          <ImgCard src={Git} alt="Logo do Git" />
        </CardStack>

        <CardStack>
          <ImgCard src={GitHub} alt="Logo do GitHub" />
        </CardStack>

        <CardStack>
          <ImgCard src={React} alt="Logo React.Js" />
        </CardStack>

        <CardStack>
          <ImgCard src={Type} alt="Logo TypeScript" />
        </CardStack>

        <CardStack>
          <ImgCard src={Styled} alt="Logo Styled-Components" />
        </CardStack>

        <CardStack>
          <ImgCard src={Next} alt="Logo Next.Js" />
        </CardStack>

        <CardStack>
          <ImgCard src={Node} alt="Logo do Node.Js" />
        </CardStack>

        <CardStack>
          <ImgCard src={Express} alt="Logo do Express com Node.Js" />
        </CardStack>
      </Stacks>

    </SectionAbout>
  );
};

export default AboutMe;
