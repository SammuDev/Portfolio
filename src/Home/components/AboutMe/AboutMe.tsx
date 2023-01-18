import Next from './img/next.jpg';
import React from './img/react.jpg';
import Styled from './img/styled.jpg';
// import Redux from './img/redux.jpg';
import Type from './img/typescript.jpg';

import CardAbout from './styles/CardAbout';
import ImgCard from './styles/ImgCard';
import PCard from './styles/PCard';

import SectionAbout from "./styles/SectionAbout";
import TitleAbout from "./styles/TitleAbout";

const AboutMe: React.FC = () => {
  return (
    <SectionAbout>
      <TitleAbout>
        Habilidades e Competências
        <p>Conheça um pouco sobre minhas principais stacks!</p>
      </TitleAbout>

      <CardAbout>
        <ImgCard src={React} alt="Logo TypeScript.Js" />
        <PCard>
          Aprendi React através de cursos online e prática constante. A medida que fui construindo
          aplicações e resolvendo problemas, minha habilidade com o framework aumentou. Atualmente,
          sinto-me proficiente com React, tendo experiência em construir aplicações complexas e utilizando
          as últimas funcionalidades do framework.
        </PCard>
      </CardAbout>

      <CardAbout cor={'#3178C6'}>
        <ImgCard src={Type} alt="Logo Next.Js" />
        <PCard>
          Aprendi TypeScript estudando documentação oficial e seguindo tutoriais. Também pratiquei a
          implementação dele em projetos pessoais e no trabalho (inclusive esse site). Com o tempo, desenvolvi uma compreensão
          sólida dos recursos avançados do TypeScript, como tipagem de interface, decorators e namespaces.
          Atualmente, me sinto proficiente com TypeScript, tendo a habilidade de desenvolver aplicações de
          forma robusta e escalável.
        </PCard>
      </CardAbout>

      <CardAbout cor={'#7259C1'}>
        <ImgCard src={Styled} alt="Logo Styled Components" />
        <PCard>
          Aprendi styled components estudando a documentação oficial e seguindo tutoriais. Também
          pratiquei a implementação dele em projetos pessoais e no trabalho (95% desse site). Com o tempo, desenvolvi uma
          compreensão sólida das funcionalidades do styled-components, como criação de componentes
          stilizados, animações e interpolação de estilos. Atualmente, me sinto proficiente com o
          styled-components, tendo a habilidade de criar aplicações web com design atraente e interativo.
        </PCard>
      </CardAbout>

      {/* <CardAbout>
        <ImgCard src={Redux} alt="Logo Redux.Js" />
      </CardAbout> */}

      <CardAbout cor={'#BDC4CB'}>
        <ImgCard src={Next} alt="Logo React.Js" />
        <PCard>
          Aprendi Next.js estudando a documentação oficial e seguindo tutoriais. Também pratiquei a
          implementação dele em projetos pessoais e no trabalho. Com o tempo, desenvolvi uma compreensão
          sólida das funcionalidades do Next.js, como server-side rendering, configuração de rotas e
          integração com APIs. Atualmente, me sinto proficiente com o Next.js, tendo a habilidade de
          desenvolver aplicações web de forma rápida e escalável.
        </PCard>
      </CardAbout>
    </SectionAbout>
  );
};

export default AboutMe;
