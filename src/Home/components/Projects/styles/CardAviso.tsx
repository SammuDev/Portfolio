import styled from 'styled-components';

type Props = {
  display?: string;
};

const CardAviso = styled.div<Props>`
  border: 3px solid #fff;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  margin-top: 25px;
  padding: 20px;
  display: ${props => props.display};

  @media screen and (min-width: 1020px) {
    margin-top: 100px;
    display: block;
  }
`;

export default CardAviso;
