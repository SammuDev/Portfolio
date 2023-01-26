import LinkEmail from "./styles/LinkEmail";
import LinkWhats from "./styles/LinkWhats";
import SectionFooter from "./styles/SectionFooter";

import { FaCopyright, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

import GridBox from "./styles/GridBox";
import Column from "./styles/Column";
import Copyright from "./styles/Copyright";
import LinkSocial from "./styles/LinkSocial";
import TitleFooter from "./styles/TitleFooter";
import BackColorALL from "../../styles/BackColorALL";

const Footer: React.FC = () => {
  const In = 'https://www.linkedin.com/in/samuel-santos-5b1626216/';
  const GitGub = 'https://github.com/SammuDev';
  const Insta = 'https://www.instagram.com/samuca_dev/';

  return (
    <SectionFooter id='footer'>
      <GridBox>
        <Column>
          <TitleFooter>
            <BackColorALL>Entre em contato</BackColorALL>
          </TitleFooter>

          <LinkEmail href='mailto:samucas878@gmail.com'><FaEnvelope/> samucas878@gmail.com</LinkEmail><br/>
          <LinkWhats href='https://wa.me/5579988042570' target={'_blank'}><SiWhatsapp/> (79) 9.8804-2570</LinkWhats>
        </Column>

        <Column>
          <TitleFooter none={'none'}>
            <BackColorALL>Redes Sociais</BackColorALL>
          </TitleFooter>

          <LinkSocial href={In} target={'_blank'}><FaLinkedinIn/> Linkedin</LinkSocial><br />
          <LinkSocial href={GitGub} target={'_blank'}><FaGithub/> GitHub</LinkSocial><br />
          <LinkSocial href={Insta} target={'_blank'}><FaInstagram/> Instagram</LinkSocial>
        </Column>
      </GridBox>

      <hr />

      <Copyright>
        Copyright <FaCopyright/> 2023 Samuel Santos. Todos os direitos reservados.
      </Copyright>
    </SectionFooter>
  );
};

export default Footer;
