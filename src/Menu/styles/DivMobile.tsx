import styled from "styled-components";

type DisplayProp = {
  on?: boolean;
}

const DivMobile = styled.div<DisplayProp>`
  @keyframes mobileOn {
    from {rotate: 0deg;}
    to {rotate: 315deg;}
  }
  @keyframes mobileOff {
    from {rotate: 315deg;}
    to {rotate: 0deg;}
  }

  border: 3px solid #fff;
  border-radius: 5px;
  background-color: #fff;
  rotate: ${props => props.on && '315deg'};
  margin-bottom: 6px;
  animation: ${props => props.on ? 'mobileOn .5s' : 'mobileOff .5s'};
`;

export default DivMobile;
