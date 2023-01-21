import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkEmail from "./styles/LinkEmail";
import LinkWhats from "./styles/LinkWhats";
import SectionFooter from "./styles/SectionFooter";

import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <SectionFooter>
      <div>
        <div>
          <LinkEmail href='mailto:samucas878@gmail.com'><FaEnvelope/> samucas878@gmail.com</LinkEmail><br/>
          <LinkWhats href='https://wa.me/5579988042570' target={'_blank'}><FaWhatsapp/> +55 (79) 9.8804-2570</LinkWhats>
        </div>

        <div></div>
      </div>

      <div></div>
    </SectionFooter>
  );
};

export default Footer;
