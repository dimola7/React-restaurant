import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ::selection {
    background-color: #f1c40f; 
  }
`;

export default GlobalStyle;
