import Next from './img/next.jpg';
import React from './img/react.jpg';
import Styled from './img/styled.jpg';
// import Redux from './img/redux.jpg';
import Type from './img/typescript.jpg';

import CardAbout from './styles/CardAbout';
import ImgCard from './styles/ImgCard';
import PCard from './styles/PCard';
import ParagraphyAbout from './styles/ParagraphyAbout';

import SectionAbout from "./styles/SectionAbout";
import TitleAbout from "./styles/TitleAbout";

const AboutMe: React.FC = () => {
  return (
    <SectionAbout>
      <TitleAbout>Habilidades e Competências</TitleAbout>

      <ParagraphyAbout>Texto</ParagraphyAbout>

      <CardAbout>
        <ImgCard src={React} alt="Logo TypeScript.Js" />
        <PCard>TEXTO</PCard>
      </CardAbout>

      <CardAbout cor={'#3178C6'}>
        <ImgCard src={Type} alt="Logo Next.Js" />
        <PCard>TEXTO</PCard>
      </CardAbout>

      <CardAbout cor={'#7259C1'}>
        <ImgCard src={Styled} alt="Logo Styled Components" />
        <PCard>TEXTO</PCard>
      </CardAbout>

      {/* <CardAbout>
        <ImgCard src={Redux} alt="Logo Redux.Js" />
      </CardAbout> */}

      <CardAbout cor={'#BDC4CB'}>
        <ImgCard src={Next} alt="Logo React.Js" />
        <PCard>TEXTO</PCard>
      </CardAbout>
    </SectionAbout>
  );
};

export default AboutMe;
