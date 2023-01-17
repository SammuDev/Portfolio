import Card from "./styles/Card";
import CardServices from "./styles/CardServices";
import SectionServices from "./styles/SectionServices";
import TitleServices from "./styles/TitleServices";

const Services: React.FC = () => {
  return (
    <SectionServices>
      <TitleServices>Meus serviços</TitleServices>
      <p>TEXTO</p>
      <CardServices>
        <Card>TEXTO</Card>
        <Card>TEXTO</Card>
        <Card>TEXTO</Card>
      </CardServices>
    </SectionServices>
  );
};

export default Services;
