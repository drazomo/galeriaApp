import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: normal;
  };

  #__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  min-height: 100vh;
}

  main {
    margin: auto;
  }
`;

export default GlobalStyles;
