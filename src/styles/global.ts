import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background-color: #F4F4F4;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  
  button {
    cursor: pointer;
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
