import styled from 'styled-components';

type Props = {
  cor?: string;
};

const CardAbout = styled.div<Props>`
  width: 100%;
  height: 550px;
  margin-top: 30px;

  @media screen and (min-width: 749px) {
    border-top: 1px solid ${props => props.cor};
    border-radius: 10px 0 0;
    height: 250px;
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export default CardAbout;
