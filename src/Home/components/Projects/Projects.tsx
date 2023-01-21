import Pikachu from './img/pokeball.jpg';
import Gerador from './img/gerador.jpg';

import BackColorALL from "../../styles/BackColorALL";
import CardProject from "./styles/CardProject";
import Column from "./styles/Column";
import LinkImgProject from "./styles/LinkImgProject";
import SectionProjects from "./styles/SectionProjects";
import TitleProject from "./styles/TitleProject";
import PCard from './styles/PCard';
import LinkTitleCard from './styles/LinkTitleCard';
import LinkButtonCard from './styles/LinkButtonCard';
import CardAviso from './styles/CardAviso';
import Loading from './styles/Loading';

const Projects: React.FC = () => {
  const linkPokeApi = 'https://singular-creponne-1b412e.netlify.app/';
  const linkGerador = 'https://sammudev.github.io/Gerador_De_Senhas/';

  return (
    <SectionProjects>
      <Column>
        <TitleProject>
          Selecione um <BackColorALL>Projeto</BackColorALL>
        </TitleProject>
        <p>A sessão projetos é uma área do site onde podem encontrar informações detalhadas sobre os projetos em andamento ou
          concluídos por mim. </p>

        {/* PRIMEIRO PROJETO */}
        <CardProject>
          <LinkImgProject href={linkPokeApi} target={'_blank'}><img src={Pikachu} alt="Logo Pikachu" /></LinkImgProject>

          <LinkTitleCard href={linkPokeApi} target={'_blank'} cor={'#7E2322'}>Poke-API</LinkTitleCard>
          <PCard>
            Esse site pode exibir uma lista de Pokémons disponíveis na série, incluindo suas
            imagens, tipos, habilidades e estatísticas. Os usuários podem procurar Pokémon específicos
            usando o nome, e visualizar informações detalhadas sobre cada
            personagem.
          </PCard>

          <LinkButtonCard href={linkPokeApi} target={'_blank'}>View Project ▶</LinkButtonCard>
        </CardProject>

        <CardAviso display={'none'}>
          Projeto em andamento <Loading/>
        </CardAviso>
      </Column>

      <Column>
        {/* SEGUBDO PROJETO */}
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

        {/* TERCEIRO PROJETO */}
        {/* <CardProject>
          <LinkImgProject href={} target={'_blank'}><img src={Gerador} alt="Logo Gerador de Senhas" /></LinkImgProject>

          <LinkTitleCard href={} target={'_blank'} cor={'#5A5A5A'}>Gerador</LinkTitleCard>
          <PCard>
            Ajuda os usuários a criar senhas seguras e únicas para suas contas online. Ele oferece opções para personalizar a
            senha, como o tamanho da senha, os caracteres permitidos e a inclusão de números, letras maiúsculas e símbolos, podendo
            criar senhas fortes que são difíceis de adivinhar.
          </PCard>

          <LinkButtonCard href={} target={'_blank'}>View Project ▶</LinkButtonCard>
        </CardProject> */}

        <CardAviso>
          Projeto em andamento <Loading/>
        </CardAviso>
      </Column>

    </SectionProjects>
  );
};

export default Projects;
