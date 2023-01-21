import styled from 'styled-components';

type TitleProps = {
  none?: string;
};

const TitleFooter = styled.h1<TitleProps>`
  font-size: 40px;
  margin-bottom: 50px;
  display: ${props => props.none};

  @media screen and (min-width: 1020px) {
    font-size: 60px;
    display: block;
  }
`;

export default TitleFooter;
