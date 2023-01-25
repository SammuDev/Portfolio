import Next from './img/next.jpg';
import React from './img/react.jpg';
import Styled from './img/styled.jpg';
// import Redux from './img/redux.jpg';
import Type from './img/typescript.jpg';
import Node from './img/node.jpg';

import CardAbout from './styles/CardAbout';
import ImgCard from './styles/ImgCard';

import SectionAbout from "./styles/SectionAbout";
import TitleAbout from "./styles/TitleAbout";

const AboutMe: React.FC = () => {
  return (
    <SectionAbout>
      <TitleAbout>
        Habilidades e Competências
        <p>Essas são as stacks que utilizo diariamente</p>
      </TitleAbout>

      <CardAbout>
        <ImgCard src={React} alt="Logo React.Js" />
      </CardAbout>

      <CardAbout cor={'#3178C6'}>
        <ImgCard src={Type} alt="Logo TypeScript" />
      </CardAbout>

      <CardAbout cor={'#7259C1'}>
        <ImgCard src={Styled} alt="Logo Styled-Components" />
      </CardAbout>

      {/* <CardAbout>
        <ImgCard src={Redux} alt="Logo Redux.Js" />
      </CardAbout> */}

      <CardAbout cor={'#BDC4CB'}>
        <ImgCard src={Next} alt="Logo Next.Js" />
      </CardAbout>

      <CardAbout cor={'#7259C1'}>
        <ImgCard src={Node} alt="Logo do Node.Js" />
      </CardAbout>
    </SectionAbout>
  );
};

export default AboutMe;
