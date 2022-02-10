import { PanelButtons } from "../PanelButtons";
import { TodoList } from "../TodoList";
import { Container } from "./styles";

export function Dasboard() {
  return (
    <Container>
      <PanelButtons />
      <TodoList />
    </Container>
  );
}
