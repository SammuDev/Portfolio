import BackColorALL from "../../styles/BackColorALL";
import CardProject from "./styles/CardProject";
import FirstColumn from "./styles/FirstColumn";
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
          TEXTO
        </CardProject>
      </FirstColumn>

      <SecondColumn>
        <CardProject>
          TEXTO
        </CardProject>
      </SecondColumn>

    </SectionProjects>
  );
};

export default Projects;
