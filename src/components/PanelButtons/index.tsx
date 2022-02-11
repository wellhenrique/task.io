import { Container } from "./styles";
import plusImg from "../../assets/plus.svg";
import searchImg from "../../assets/search.svg";
export function PanelButtons() {
  return (
    <>
      <Container>
        <button type="button">
          <img src={plusImg} alt="" />
          <p>Adicionar uma Tarefa</p>
        </button>
        <button type="button">
          <img src={searchImg} alt="" />
          <p>Pesquisar uma Tarefa</p>
        </button>
      </Container>
    </>
  );
}
