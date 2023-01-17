import styled from 'styled-components';

type Props = {
  cor?: string;
};

const CardAbout = styled.div<Props>`
  border-bottom: 1px solid cyan;
  width: 100%;
  height: 250px;
  margin-top: 30px;

  @media screen and (min-width: 749px) {
    border-top: 1px solid ${props => props.cor};
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export default CardAbout;
