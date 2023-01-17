import styled from "styled-components";

const ContactMe = styled.div`
  margin-right: 20px;
  display: none;

  @media screen and (min-width: 749px) {
    margin-right: 100px;
    display: inline-block;

    a {
      border-radius: 25px;
      color: #fff;
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
  }
`;

export default ContactMe;
