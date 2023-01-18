import Pikachu from './img/pikachu.jpg';

import BackColorALL from "../../styles/BackColorALL";
import CardProject from "./styles/CardProject";
import FirstColumn from "./styles/FirstColumn";
import LinkProject from "./styles/LinkProject";
import SecondColumn from "./styles/SecondColumn";
import SectionProjects from "./styles/SectionProjects";
import TitleProject from "./styles/TitleProject";

const Projects: React.FC = () => {
  return (
    <SectionProjects>
      <FirstColumn>
        <TitleProject>
          Selecione um <BackColorALL>Projeto</BackColorALL>
        </TitleProject>
        <p>Aqui estão alguns que considero os mais desafiadores, mas recompensadores</p>

        <CardProject>
          <LinkProject href="https://singular-creponne-1b412e.netlify.app/" target={'_blank'}><img src={Pikachu} alt="Logo Pikachu" /></LinkProject>
        </CardProject>
      </FirstColumn>

      <SecondColumn>
        <CardProject>
          <LinkProject><img src="" alt="" /></LinkProject>
        </CardProject>
      </SecondColumn>

    </SectionProjects>
  );
};

export default Projects;
