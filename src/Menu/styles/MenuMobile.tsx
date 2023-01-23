import styled from "styled-components";

interface Props {
  on: any;
}

const MenuMobile = styled.div<Props>`
  display: ${props => props.on ? 'grid' : 'none'};
  align-items: center;

  a {
    color: #fff;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1020px) {
    display: none;
  }
`;

export default MenuMobile;
