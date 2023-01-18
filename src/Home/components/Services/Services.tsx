import WebDesign from './img/web-design.jpg';
import SeoApi from './img/seo-api.jpg';
import ScalableApp from './img/apps-escaláveis.jpg';

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
  return (
    <SectionServices>
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
        <Card>
          <ImgCard src={WebDesign} alt="Web Design" />

          <H2Card>WebSite Design</H2Card>
          <Pcard>
            Utilizando React, TypeScript e Styled-Components para construir interfaces de usuário
            incríveis que sejam fáceis de navegar e usar para os usuários.
          </Pcard>
        </Card>

        <Card>
          <ImgCard src={ScalableApp} alt="Apps Escaláveis" />

          <H2Card>Aplicativos web escaláveis</H2Card>
          <Pcard>
            Utilizando Redux para gerenciar o estado global do aplicativo e
            Next.js para construir aplicativos web de alta performance que possam lidar com uma grande
            quantidade de tráfego.
          </Pcard>
        </Card>

        <Card>
          <ImgCard src={SeoApi} alt="SEO e Integração com API" />

          <H2Card>Otimização de SEO e Integração com APIs</H2Card>
          <Pcard>
            Utilizando técnicas de SEO para garantir que o site seja facilmente encontrado nos motores
            de busca e Integrando o site ou aplicativo com APIs externas para obter e exibir dados dinâmicos.
          </Pcard>
        </Card>
      </CardServices>
    </SectionServices>
  );
};

export default Services;
