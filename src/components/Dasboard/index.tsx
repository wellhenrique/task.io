import { PanelButtons } from "../PanelButtons";
import { TodoList } from "../TodoList";
import { Container } from "./styles";

export function Dasboard() {
  return (
    <>
      <PanelButtons />
      <Container>
        <TodoList />
      </Container>
    </>
  );
}
