import BackColorALL from "../../styles/BackColorALL";
import SectionProjects from "./styles/SectionProjects";
import TitleProject from "./styles/TitleProject";

const Projects: React.FC = () => {
  return (
    <SectionProjects>
      <TitleProject>
        Selecione um <BackColorALL>Projeto</BackColorALL>
      </TitleProject>
      <p>Aqui estão alguns que considero os mais desafiadores, mas recompensadores</p>

    </SectionProjects>
  );
};

export default Projects;
