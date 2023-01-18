import styled from "styled-components";

const SectionProjects = styled.section`
  border: 1px solid #fff;
  margin: 20px;

  @media screen and (min-width: 1020px) {
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default SectionProjects;
