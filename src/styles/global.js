import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-weight: ${({theme}) => theme.textWeight};
    margin: 0;
    font-family: Calibri;
    transition: all 0.25s linear;
    -webkit-transition: all 0.25s linear;
    -moz-transition: all 0.25s linear;
    -ms-transition: all 0.25s linear;
    -o-transition: all 0.25s linear;
  }

  main {
    background: ${({ theme }) => theme.background};
  }

  .bold, .subsection span, a {
    font-weight: ${({theme}) => theme.bold};
  }

  section {
    h1 {
      color: ${({theme}) => theme.header}; 
    }

    p.subtext {
      color: ${({theme}) => theme.accent2};
    }

    .block-grid {
      .rounded-block {
        span {
          color: ${({theme}) => theme.accent1};
        }
      }
    }
  }

  .blob-friend {
    svg {
      path{
        fill: ${({theme}) => theme.blob};
      }
    }
    .blob-message {
      background: ${({theme}) => theme.accent1};
    }
  }

  a {
    color: ${({theme}) => theme.accent2};

    &:visited {
      color: ${({theme}) => theme.accent1};
    }
  }
  
  button#burger {
    background: ${({ theme }) => theme.blocks};
  }
  
  #headers {
    & > a {
      color: ${({theme}) => theme.text};
      transition: 0.25s linear;
        
      &:hover {
          color: ${({theme}) => theme.accent2};
      }
    }
  }

  .social-icons {
    a {
      div {
        background-color: ${({theme}) => theme.text};
        transition: 0.25s linear;
      }

      &:hover {
        div {
          background-color: ${({theme}) => theme.accent2};
        }
      }
    }

    .toggler {
      label {
        background-color: ${({theme}) => theme.text};
        .ball {
          background-color: ${({theme}) => theme.blocks};
        }
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
