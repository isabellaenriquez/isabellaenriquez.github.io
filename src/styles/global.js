import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Calibri;
    transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
    -moz-transition: all 0.25s linear;
    -ms-transition: all 0.25s linear;
    -o-transition: all 0.25s linear;
  }

  .headers {
    a {
      color: ${({theme}) => theme.text};
        
      &:hover {
          color: ${({theme}) => theme.accent1};
      }
    }
  }

  .accent1 {
    background:  ${({ theme }) => theme.accent1};
  }

  .accent1-text {
    color: ${({ theme }) => theme.accent1};
  }

  .accent2 {
    background:  ${({ theme }) => theme.accent2};
 }

 .accent2-text {
    color: ${({ theme }) => theme.accent2};
 }

 .block {
     background: ${({ theme }) => theme.blocks};
 }

 .blob {
     background: ${({ theme }) => theme.blob};

     .eyes {
         background: #000000;
     }
 }
 #sun {
     background: ${({ theme }) => theme.sun};
 }

 #moon {
    background: ${({ theme }) => theme.moon};
}

.toggle-accents {
    background: ${({ theme }) => theme.blob};
}
`;
