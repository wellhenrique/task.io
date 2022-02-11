import styled from "styled-components";

export const Container = styled.div`
  max-width: 1250px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  button {
    max-width: 600px;
    border: 1px solid rgba(10, 27, 43, 0.3);
    background-color: #fff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);

    p {
      font-size: 18px;
      font-weight: 600;
      color: #ada0a0;
    }
  }
`;
