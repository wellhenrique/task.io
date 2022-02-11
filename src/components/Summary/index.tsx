import { SummaryContainer } from "./styles";

interface SummaryProps {
  isOpen: string;
}

export function Summary(props: SummaryProps) {
  return (
    <SummaryContainer isOpen={props.isOpen}>
      <div>
        <h2>desenvolver um website</h2>
        <p>desenvolver um site de barbearia responsivo</p>
        <span>21/02/2022 10:43Hrs</span>
      </div>
      <div>
        <h2>desenvolver um website</h2>
        <p>desenvolver um site de barbearia responsivo</p>
        <span>21/02/2022 10:43Hrs</span>
      </div>
      <div>
        <h2>desenvolver um website</h2>
        <p>desenvolver um site de barbearia responsivo</p>
        <span>21/02/2022 10:43Hrs</span>
      </div>
    </SummaryContainer>
  );
}
