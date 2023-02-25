import Card from "./styles/Card";
import CardServices from "./styles/CardServices";
import H2Card from "./styles/H2Card";
import ImgCard from "./styles/ImgCard";
import Pcard from "./styles/Pcard";
import SectionServices from "./styles/SectionServices";
import TitleServices from "./styles/TitleServices";
import ParagraphServices from './styles/ParagraphServices';
import BackColorALL from '../../styles/BackColorALL';

const Services: React.FC = () => {
  const cards = [
    {id: 1, h2: 'Desenvolvimento web', img: './imgServices/web.jpg', alt: 'Web Design', p: 'Construção de websites e aplicações web, desde a concepção até a implementação e manutenção.'},
    {id: 2, h2: 'Desenvolvimento de aplicativos móveis', img: './imgServices/mobile.jpg', alt: 'Web Design', p: 'Criação de aplicativos móveis para iOS e Android usando tecnologias como React Native.'},
    {id: 3, h2: 'Desenvolvimento de software personalizado', img: './imgServices/web-design.jpg', alt: 'Web Design', p: 'Criação de softwares personalizados para atender às necessidades específicas de seus clientes.'},
    {id: 4, h2: 'Desenvolvimento de sistemas de gerenciamento de conteúdo (CMS)', img: './imgServices/cms.jpg', alt: 'Web Design', p: 'Construção de sistemas de gerenciamento de conteúdo para permitir que seus clientes gerenciem facilmente seu próprio conteúdo.'},
    {id: 5, h2: 'Migração de sistemas legados', img: './imgServices/legado.jpg', alt: 'Web Design', p: 'Migração de sistemas legados para tecnologias modernas para melhorar a eficiência e a escalabilidade.'},
    {id: 6, h2: 'Integração de sistemas', img: './imgServices/integração.jpg', alt: 'Web Design', p: 'Integração de diferentes sistemas, aplicativos ou plataformas para garantir que eles trabalhem juntos de forma eficiente.'},
    {id: 7, h2: 'Teste e garantia da qualidade', img: './imgServices/seo.jpg', alt: 'Web Design', p: 'Implementação de práticas de teste e garantia da qualidade para garantir a funcionalidade e a usabilidade dos sistemas desenvolvidos.'},
    {id: 8, h2: 'Consultoria técnica', img: './imgServices/consultoria.jpg', alt: 'Web Design', p: 'Fornecimento de consultoria técnica para ajudar seus clientes a tomar decisões informadas sobre tecnologias e soluções de software.'},
    {id: 9, h2: 'Manutenção e suporte', img: './imgServices/suporte.jpg', alt: 'Web Design', p: 'Fornecimento de manutenção e suporte para sistemas e aplicativos já desenvolvidos para garantir sua eficiência contínua.'},
  ];

  return (
    <SectionServices id='services'>
      <TitleServices>
        Prestação de <BackColorALL>Serviços</BackColorALL>
      </TitleServices>

      <ParagraphServices>
        Minha experiência inclui o desenvolvimento de aplicativos web complexos com React, onde tive a
        oportunidade de aplicar minhas habilidades em TypeScript, Styled-Components e Redux para construir
        interfaces de usuário eficientes e escaláveis. Além disso, tenho experiência em trabalhar com o
        Next.js para construir aplicativos web de alta performance.
      </ParagraphServices>

      <CardServices>
        {cards.map(card => (
          <Card key={card.id}>
            <ImgCard src={card.img} alt={card.alt} />

            <H2Card>{card.h2}</H2Card>
            <Pcard>{card.p}</Pcard>
          </Card>
        ))}
      </CardServices>
    </SectionServices>
  );
};

export default Services;
