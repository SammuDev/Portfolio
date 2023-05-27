import CardStack from './styles/CardStack';
import ImgCard from './styles/ImgCard';

import SectionAbout from "./styles/SectionAbout";
import TitleAbout from "./styles/TitleAbout";
import Stacks from './styles/Stacks';

const AboutMe: React.FC = () => {
  const cards = [
    {id: 1, src:'./imgSkills/git.jpg', alt:'Logo do Git'},
    {id: 2, src:'./imgSkills/github.jpg', alt:'Logo do GitHub'},
    {id: 3, src:'./imgSkills/kotlin.jpg', alt:'Logo do React Js'},
    {id: 4, src:'./imgSkills/androidStudio.jpg', alt:'Logo do React Native'}
  ];

  return (
    <SectionAbout id='skills'>
      <TitleAbout>
        Habilidades e Competências
        <p>Essas são as stacks que utilizo diariamente</p>
      </TitleAbout>

      <Stacks>
        {cards.map(card => (
          <CardStack key={card.id}>
            <ImgCard src={card.src} alt={card.alt} />
          </CardStack>
        ))}
      </Stacks>

    </SectionAbout>
  );
};

export default AboutMe;
