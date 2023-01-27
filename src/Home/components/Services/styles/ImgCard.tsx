import styled from 'styled-components';

const ImgCard = styled.img`
  background:  var(--bs-gray-900);
  width: 100%;
  height: 210px;

  @media screen and (min-width: 540px) {
    height: 130px;
  }
  @media screen and (min-width: 768px) {
    height: 210px;
  }
`;

export default ImgCard;
