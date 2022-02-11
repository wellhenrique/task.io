import styled from "styled-components";

interface OpenTaskProps {
  isOpen: string;
}

export const SummaryContainer = styled.div<OpenTaskProps>`
  margin-bottom: 3rem;
  animation: showUp 0.3s forwards;
  display: ${(props) =>
    props.isOpen == "TaskActive" ? "grid" : "none"} !important;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 10px;

  div + div {
    border-left: 1px solid #c4c4c4;
    padding: 0 40px;
    border-spacing: 4rem;
  }
`;
