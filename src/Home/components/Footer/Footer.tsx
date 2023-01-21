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

const Footer: React.FC = () => {
  const In = 'https://www.linkedin.com/in/samuel-santos-5b1626216/';
  const GitGub = 'https://github.com/SammuDev';
  const Insta = 'https://www.instagram.com/samuca_dev/';

  return (
    <SectionFooter>
      <GridBox>
        <Column>
          <LinkEmail href='mailto:samucas878@gmail.com'><FaEnvelope/> samucas878@gmail.com</LinkEmail><br/>
          <LinkWhats href='https://wa.me/5579988042570' target={'_blank'}><SiWhatsapp/> +55 (79) 9.8804-2570</LinkWhats>
        </Column>

        <Column>
          <h2>Redes Sociais</h2>
          <LinkSocial href={In}><FaLinkedinIn/> Linkedin</LinkSocial>
          <LinkSocial href={GitGub}><FaGithub/> GitHub</LinkSocial>
          <LinkSocial href={Insta}><FaInstagram/> Instagram</LinkSocial>
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
