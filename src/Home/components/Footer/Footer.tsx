import LinkEmail from "./styles/LinkEmail";
import LinkWhats from "./styles/LinkWhats";
import SectionFooter from "./styles/SectionFooter";

const Footer: React.FC = () => {
  return (
    <SectionFooter>
      <div>
        <div>
          ✉ <LinkEmail href='mailto:samucas878@gmail.com'>samucas878@gmail.com</LinkEmail><br/>
          {/* <a href="https://api.whatsapp.com/send?phone=+5579988042570" target={'_blank'}>(79) 9.8804-2570</a> */}
          <LinkWhats href='https://wa.me/5579988042570' target={'_blank'}>+55 (79) 9.8804-2570</LinkWhats>
        </div>

        <div></div>
      </div>

      <div></div>
    </SectionFooter>
  );
};

export default Footer;
