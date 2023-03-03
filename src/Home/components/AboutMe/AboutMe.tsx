import CardStack from './styles/CardStack';
import ImgCard from './styles/ImgCard';

import SectionAbout from "./styles/SectionAbout";
import TitleAbout from "./styles/TitleAbout";
import Stacks from './styles/Stacks';

const AboutMe: React.FC = () => {
  const cards = [
    {id: 1, src:'./imgSkills/git.jpg', alt:'Logo do Git'},
    {id: 2, src:'./imgSkills/github.jpg', alt:'Logo do GitHub'},
    {id: 3, src:'./imgSkills/react.jpg', alt:'Logo do React Js'},
    {id: 4, src:'./imgSkills/react-native.jpg', alt:'Logo do React Native'},
    {id: 5, src:'./imgSkills/typescript.jpg', alt:'Logo do TypeScript'},
    {id: 6, src:'./imgSkills/next.jpg', alt:'Logo do Next Js'},
    {id: 7, src:'./imgSkills/styled.jpg', alt:'Logo do Styled-Components'},
    {id: 8, src:'./imgSkills/sass.jpg', alt:'Logo do Sass'},
    {id: 9, src:'./imgSkills/firebase.jpg', alt:'Logo do Firebase'},
    {id: 10, src:'./imgSkills/node.jpg', alt:'Logo do Node Js'},
    {id: 11, src:'./imgSkills/express.jpg', alt:'Logo de Express com Node'},
    {id: 12, src:'./imgSkills/mySQL.jpg', alt:'Logo do MySQL'},
    {id: 13, src:'./imgSkills/mongoDB.jpg', alt:'Logo do MongoDB'}
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
