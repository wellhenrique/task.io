import styled from "styled-components";

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;

  & > div {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #c3c3c3;
    box-shadow: 0 1px 8px rgba(47, 47, 47, 0.2);
    transition: background-color 0.2s;
  }

  & > div + div {
    margin-top: 1rem;
  }

  & > div:hover {
    background-color: rgba(242, 242, 242, 0.8);
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    display: flex;
    align-items: center;
    position: relative;
  }

  h1::after {
    content: "";
    border-radius: 100%;
    border: 2px solid #000;
    position: absolute;
    width: 10px;
    right: -30px;
    height: 10px;
  }

  .completed::after {
    background-color: green;
  }

  .pending::after {
    background-color: #fb5;
  }

  .incomplete::after {
    background-color: red;
  }

  .TaskControl button {
    border: 0;
    background-color: #fff;

    &.active img:first-child:hover,
    &.active img:first-child {
      transform: rotate(180deg);
    }
  }

  .TaskControl img {
    box-shadow: 0 1px 4px rgba(43, 43, 43, 0.2);
    width: 24px;
    height: 24px;
    transition: transform 0.2s;

    &.expand {
      margin-right: 20px;
    }

    &.trash:hover {
      transform: rotate(45deg), rotate(-45deg);
    }
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
