import styled from "styled-components";

type Props = {
  cor?: string;
};

const LinkTitleCard = styled.a<Props>`
  background-color: #f1f1f1;
  color: ${props => props.cor};
  font-size: 40px;

  &:hover {
    color: ${props => props.cor};
  }
`;

export default LinkTitleCard;
