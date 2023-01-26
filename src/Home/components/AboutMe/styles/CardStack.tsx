import styled from 'styled-components';

type Props = {
  cor?: string;
};

const CardStack = styled.div<Props>`
  border: 3px solid #c0c0c0;
  border-radius: 15px;
  width: 85%;
  /* height: 550px; */
  margin-top: 30px;

  @media screen and (min-width: 1020px) {
    width: 250px;
    /* height: 250px; */
    /* display: grid;
    grid-template-columns: 400px 1fr; */
    display: inline-block;
  }
`;

export default CardStack;
