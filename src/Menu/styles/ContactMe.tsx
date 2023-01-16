import styled from "styled-components";

const ContactMe = styled.div`
  margin-right: 100px;

  a {
    border-radius: 25px;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    transition: .5s;
    display: inline-block;
    &:hover {
      background-color: #222222;
    }
  }
`;

export default ContactMe;
