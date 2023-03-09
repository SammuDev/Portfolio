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
  const firstColum = [
    {id: 1, img: './imgProjects/pokeball.jpg', alt: 'Card da Poke-API', href: 'https://singular-creponne-1b412e.netlify.app/', title: 'Poke-API', color: '#ff0000', text:'Esse site pode exibir uma lista de Pokémons disponíveis na série, incluindo suas imagens, tipos, habilidades e estatísticas. Os usuários podem procurar Pokémon específicos usando o nome, e visualizar informações detalhadas sobre cada personagem.'},
  ];

  const lastColum = [
    {id: 1, img: './imgProjects/laundry.jpg', alt: 'Card do Laundry-App', href: 'https://sammudev.github.io/Gerador_De_Senhas/', title: 'Laundry-App', color: '#6B5DFF', text:'Aplicativo com interface simples e fácil de usar, permitindo que os usuários encontrem rapidamente os restaurantes e pratos que desejam. Os usuários também podem fazer alterações em seus pedidos, como adicionar ou remover itens e escolher opções de entrega e pagamento.'},
    {id: 2, img: './imgProjects/gerador.jpg', alt: 'Card do Gerador', href: 'https://sammudev.github.io/Gerador_De_Senhas/', title: 'Gerador', color: '#212121', text:'Esse site pode exibir uma lista de Pokémons disponíveis na série, incluindo suas imagens, tipos, habilidades e estatísticas. Os usuários podem procurar Pokémon específicos usando o nome, e visualizar informações detalhadas sobre cada personagem.'},
  ];

  return (
    <SectionProjects id='projects'>
      {/* ===== PRIMEIRA COLUNA ===== */}
      <Column>
        <TitleProject>
          Selecione um <BackColorALL>Projeto</BackColorALL>
        </TitleProject>
        <p>A sessão de projetos é onde podem ser encontrados projetos em andamento ou concluídos por mim. </p>

        {/* PRIMEIRO PROJETO */}
        {firstColum.map(card => (
          <CardProject key={card.id}>
            <LinkImgProject href={card.href} target={'_blank'}><img src={card.img} alt="Logo Pikachu" /></LinkImgProject>

            <LinkTitleCard href={card.href} target={'_blank'} cor={card.color}>{card.title}</LinkTitleCard>
            <PCard>
              {card.text}
            </PCard>

            <LinkButtonCard href={card.href} target={'_blank'}>View Project ▶</LinkButtonCard>
          </CardProject>
        ))}

        <CardAviso display={'none'}>
          Projeto em andamento <Loading/>
        </CardAviso>
      </Column>

      {/* ===== SEGUNDA COLUNA ===== */}
      <Column>
        {/* SEGUNDO PROJETO */}
        {lastColum.map(card => (
          <CardProject key={card.id}>
            <LinkImgProject href={card.href} target={'_blank'}><img src={card.img} alt="Logo Pikachu" /></LinkImgProject>

            <LinkTitleCard href={card.href} target={'_blank'} cor={card.color}>{card.title}</LinkTitleCard>
            <PCard>
              {card.text}
            </PCard>

            <LinkButtonCard href={card.href} target={'_blank'}>View Project ▶</LinkButtonCard>
          </CardProject>
        ))}
        <CardAviso>
          Projeto em andamento <Loading/>
        </CardAviso>
      </Column>

    </SectionProjects>
  );
};

export default Projects;
