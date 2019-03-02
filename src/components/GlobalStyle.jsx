import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ::selection {
    background-color: #EA2027; 
    color: #fff;
  }
`;

export default GlobalStyle;
