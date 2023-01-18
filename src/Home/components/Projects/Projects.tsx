import Pikachu from './img/pikachu.jpg';
import Gerador from './img/gerador.jpg';

import BackColorALL from "../../styles/BackColorALL";
import CardProject from "./styles/CardProject";
import FirstColumn from "./styles/FirstColumn";
import LinkImgProject from "./styles/LinkImgProject";
import SecondColumn from "./styles/SecondColumn";
import SectionProjects from "./styles/SectionProjects";
import TitleProject from "./styles/TitleProject";
import PCard from './styles/PCard';
import LinkTitleCard from './styles/LinkTitleCard';
import LinkButtonCard from './styles/LinkButtonCard';

const Projects: React.FC = () => {
  const linkPokeApi = 'https://singular-creponne-1b412e.netlify.app/';
  const linkGerador = 'https://sammudev.github.io/Gerador_De_Senhas/';

  return (
    <SectionProjects>
      <FirstColumn>
        <TitleProject>
          Selecione um <BackColorALL>Projeto</BackColorALL>
        </TitleProject>
        <p>A sessão projetos é uma área do site onde podem encontrar informações detalhadas sobre os projetos em andamento ou
          concluídos por mim. </p>

        <CardProject>
          <LinkImgProject href={linkPokeApi} target={'_blank'}><img src={Pikachu} alt="Logo Pikachu" /></LinkImgProject>

          <LinkTitleCard href={linkPokeApi} target={'_blank'} cor={'#DDC30A'}>Poke-API</LinkTitleCard>
          <PCard>
            site pode exibir uma lista de todos os Pokémon disponíveis na série, incluindo suas
            imagens, tipos, habilidades e estatísticas. Os usuários podem procurar Pokémon específicos
            usando o nome ou número de identificação, e visualizar informações detalhadas sobre cada
            personagem.
          </PCard>

          <LinkButtonCard href={linkPokeApi} target={'_blank'}>View Project ▶</LinkButtonCard>
        </CardProject>
      </FirstColumn>

      <SecondColumn>
        <CardProject>
          <LinkImgProject href={linkGerador} target={'_blank'}><img src={Gerador} alt="Logo Gerador de Senhas" /></LinkImgProject>

          <LinkTitleCard href={linkGerador} target={'_blank'} cor={'#5A5A5A'}>Gerador</LinkTitleCard>
          <PCard>
            Ajuda os usuários a criar senhas seguras e únicas para suas contas online. Ele oferece opções para personalizar a
            senha, como o tamanho da senha, os caracteres permitidos e a inclusão de números, letras maiúsculas e símbolos, podendo
            criar senhas fortes que são difíceis de adivinhar.
          </PCard>

          <LinkButtonCard href={linkGerador} target={'_blank'}>View Project ▶</LinkButtonCard>
        </CardProject>
      </SecondColumn>

    </SectionProjects>
  );
};

export default Projects;