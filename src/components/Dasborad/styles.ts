import styled from "styled-components";

export const Container = styled.main`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  background-color: #fff;
  border-bottom: 1px solid #c4c4c4;

  h1 {
    font-weight: 600;
    font-size: 64px;
  }

  .colorPoint {
    color: #fb5;
  }
`;
