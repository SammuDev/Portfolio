import styled from "styled-components";

type DisplayProp = {
  on?: boolean;
}

const DivMobile = styled.div<DisplayProp>`
  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 6px;
  display: ${props => props.on && 'none'};
`;

export default DivMobile;
